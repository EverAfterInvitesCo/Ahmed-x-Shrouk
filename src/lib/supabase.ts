import { createClient } from '@supabase/supabase-js';
import { RSVP, GuestbookMessage } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

let supabaseInstance: any = null;
try {
  if (isSupabaseConfigured) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  }
} catch (error) {
  console.warn('Failed to initialize Supabase client:', error);
}

// Local storage backup utilities
const LOCAL_RSVP_KEY = 'everafterinvites_rsvps';
const LOCAL_GUESTBOOK_KEY = 'everafterinvites_guestbook';

const getLocalRSVPs = (): RSVP[] => {
  try {
    const data = localStorage.getItem(LOCAL_RSVP_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};

const saveLocalRSVP = (rsvp: RSVP): RSVP => {
  const current = getLocalRSVPs();
  const newRsvp = { ...rsvp, id: rsvp.id || crypto.randomUUID(), created_at: rsvp.created_at || new Date().toISOString() };
  localStorage.setItem(LOCAL_RSVP_KEY, JSON.stringify([...current, newRsvp]));
  return newRsvp;
};

const getLocalGuestbook = (): GuestbookMessage[] => {
  try {
    const data = localStorage.getItem(LOCAL_GUESTBOOK_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};

const saveLocalGuestbook = (msg: Omit<GuestbookMessage, 'id'>): GuestbookMessage => {
  const current = getLocalGuestbook();
  const newMsg: GuestbookMessage = {
    id: crypto.randomUUID(),
    name: msg.name,
    message: msg.message,
    created_at: msg.created_at || new Date().toISOString(),
  };
  localStorage.setItem(LOCAL_GUESTBOOK_KEY, JSON.stringify([...current, newMsg]));
  return newMsg;
};

// --- Updated API Functions ---

export const submitRSVP = async (rsvp: Omit<RSVP, 'id' | 'created_at'>): Promise<{ success: boolean; data?: RSVP; error?: string }> => {
  try {
    if (isSupabaseConfigured && supabaseInstance) {
      // Mapping to your actual database columns: name, attending, guests_count
      const { data, error: insertError } = await supabaseInstance
        .from('rsvp')
        .insert([{
          name: `${rsvp.first_name} ${rsvp.last_name}`,
          attending: rsvp.attendance === 'accept', 
          guests_count: rsvp.guests,
          created_at: new Date().toISOString()
        }])
        .select()
        .single();

      if (insertError) throw insertError;
      return { success: true, data };
    }
  } catch (e: any) {
    console.error('Supabase RSVP insert error:', e);
  }

  // Fallback
  const saved = saveLocalRSVP({
    first_name: rsvp.first_name,
    last_name: rsvp.last_name,
    phone: rsvp.phone,
    guests: rsvp.guests,
    attendance: rsvp.attendance,
  });

  return { success: true, data: saved };
};

export const submitGuestbookMessage = async (name: string, message: string): Promise<{ success: boolean; data?: GuestbookMessage; error?: string }> => {
  const created_at = new Date().toISOString();
  try {
    if (isSupabaseConfigured && supabaseInstance) {
      const { data, error } = await supabaseInstance
        .from('guestbook')
        .insert([{ name, message, created_at }])
        .select()
        .single();
      if (error) throw error;
      return { success: true, data };
    }
  } catch (e: any) {
    console.error('Supabase Guestbook submit error:', e);
  }
  
  // Fallback to local storage
  const saved = saveLocalGuestbook({ name, message, created_at });
  return { success: true, data: saved };
};

export const getGuestbookMessages = async (): Promise<GuestbookMessage[]> => {
  try {
    if (isSupabaseConfigured && supabaseInstance) {
      const { data, error } = await supabaseInstance
        .from('guestbook')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    }
  } catch (e) {
    console.warn('Supabase Guestbook fetch failed, loading local messages:', e);
  }

  const locals = getLocalGuestbook();
  return locals.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
};
