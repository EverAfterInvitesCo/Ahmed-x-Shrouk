import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock } from 'lucide-react';
import { GoldDivider, GoldCrest } from './GoldOrnaments';

export const VenueSection: React.FC = () => {
  const GOOGLE_MAPS_LINK = 'https://share.google/2CcSs4nQqtKxlQXi2';
  
  // Real embedded map for Al Rahman Al Raheem Venue, Cairo, Egypt
  const MAP_EMBED_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.9348123284065!2d31.291771176288673!3d30.067389817112003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f74959db6ef%3A0xe6bf44b5683936a7!2sAl-Rahman%20Al-Raheem%20Mosque!5e0!3m2!1sen!2seg!4v1710000000000!5m2!1sen!2seg';

  return (
    <section
      id="venue-section"
      className="relative min-h-screen py-24 px-6 md:px-12 bg-ivory text-stone-800 border-b border-gold-light/20 flex flex-col items-center justify-center"
    >
      {/* Soft background glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-champagne/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <GoldCrest className="mb-4" />
          <h2 id="venue-heading" className="font-playfair text-4xl sm:text-5xl md:text-6xl font-light text-stone-900 tracking-wide">
            The Venue
          </h2>
          <GoldDivider />
          <h3 id="venue-subheading" className="font-cinzel text-lg md:text-xl text-gold-dark font-medium tracking-widest mt-2">
            Al Rahman Al Raheem Venue
          </h3>
          <p id="venue-tagline" className="mt-3 font-cormorant text-xl text-stone-500 italic">
            &ldquo;Where our forever begins.&rdquo;
          </p>
        </motion.div>

        {/* Layout Grid: Map and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 w-full mt-4 items-stretch">
          {/* Left Column: Embedded Map */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col h-full"
          >
            <div id="map-container" className="relative flex-1 min-h-[350px] md:min-h-[450px] rounded-2xl overflow-hidden border border-gold-light/45 bg-white/50 backdrop-blur-md p-2 shadow-[0_15px_40px_rgba(197,168,128,0.08)] group animate-glow">
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gold/50"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-gold/50"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-gold/50"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gold/50"></div>

              <iframe
                src={MAP_EMBED_SRC}
                className="w-full h-full rounded-xl"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Al Rahman Al Raheem Venue Location"
              ></iframe>
            </div>

            <div className="mt-6 flex justify-center lg:justify-start">
              <a
                id="btn-google-maps"
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-full border border-gold/60 bg-white hover:bg-gold/10 text-gold-dark hover:text-gold-dark font-cinzel text-xs tracking-widest uppercase transition-all duration-300 shadow-sm shadow-gold-light/10 hover:shadow-md cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-gold-dark" />
                <span>View on Google Maps</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Elegant Details Card */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div id="venue-details-card" className="h-full rounded-2xl bg-white/65 backdrop-blur-md border border-gold-light/45 shadow-[0_15px_45px_rgba(197,168,128,0.06)] p-8 md:p-10 flex flex-col justify-between animate-glow relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold/40"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold/40"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold/40"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold/40"></div>

              <div className="space-y-8">
                <div className="border-b border-gold-light/20 pb-4">
                  <span className="font-cinzel text-xs tracking-widest text-gold-dark font-medium block mb-1">LOCATION DETAILS</span>
                  <p className="font-playfair text-xl text-stone-900">Wedding Invitation</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 rounded-full bg-champagne/40 border border-gold-light/30 text-gold-dark mt-1 flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-cinzel text-xs tracking-wider text-stone-900 font-medium uppercase">Venue</h4>
                      <p className="mt-1 font-cormorant text-md md:text-lg text-stone-700 leading-relaxed">
                        Al Rahman Al Raheem Venue<br />
                        <span className="text-xs text-stone-500 font-sans block mt-0.5">Salah Salem Road, Abbassia, Cairo, Egypt</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 rounded-full bg-champagne/40 border border-gold-light/30 text-gold-dark mt-1 flex-shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-cinzel text-xs tracking-wider text-stone-900 font-medium uppercase">Ceremony Time</h4>
                      <p className="mt-1 font-cormorant text-md md:text-lg text-stone-700">
                        July 27, 2026<br />
                        <span className="text-stone-500 italic font-light">at 7:00 PM onwards</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
