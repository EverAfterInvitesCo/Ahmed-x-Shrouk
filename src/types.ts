export interface RSVP {
  id?: string;
  first_name: string;
  last_name: string;
  phone: string;
  guests: number;
  attendance: 'accept' | 'decline';
  created_at?: string;
}

export interface GuestbookMessage {
  id?: string;
  name: string;
  message: string;
  created_at: string;
}
