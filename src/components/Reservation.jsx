import ReservationImg from "../assets/reservation.jpg";
import { fadeUp } from "./Animation";
import { motion } from "framer-motion";

function Reservation() {
  return (
    <section id="reservation" className="bg-savora-dark text-savora-cream py-20 px-6 scroll-mt-10">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div  className="h-100 md:h-150">
          <img 
            src={ReservationImg} 
            alt="Reserve a table at Savora" 
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Form */}
        <div>
          <p className="font-body text-savora-gold uppercase tracking-widest text-sm mb-3">
            Reservation
          </p>
          <motion.h2 {...fadeUp} className="font-heading text-4xl md:text-5xl mb-10">
            Book Your Table
          </motion.h2>

          <form 
            action="https://formspree.io/f/mpqgrobj" 
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="font-body text-base text-gray-400 block mb-1">Your Name</label>
              <input 
                type="text" 
                name="name" 
                required
                className="w-full bg-transparent border-b border-savora-border text-savora-cream py-2 outline-none focus:border-savora-gold transition"
              />
            </div>

            <div>
              <label className="font-body text-base text-gray-400 block mb-1">How Many People</label>
              <input 
                type="number" 
                name="guests" 
                min="1"
                required
                className="w-full bg-transparent border-b border-savora-border text-savora-cream py-2 outline-none focus:border-savora-gold transition"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="font-body text-base text-gray-400 block mb-1">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  className="w-full bg-transparent border-b border-savora-border text-savora-cream py-2 outline-none focus:border-savora-gold transition"
                />
              </div>
              <div>
                <label className="font-body text-base text-gray-400 block mb-1">Your Phone</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required
                  className="w-full bg-transparent border-b border-savora-border text-savora-cream py-2 outline-none focus:border-savora-gold transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="font-body text-base text-gray-400 block mb-1">Date</label>
                <input 
                  type="date" 
                  name="date" 
                  required
                  className="w-full bg-transparent border-b border-savora-border text-savora-cream py-2 outline-none focus:border-savora-gold transition"
                />
              </div>
              <div>
                <label className="font-body text-base text-gray-400 block mb-1">Time</label>
                <input 
                  type="time" 
                  name="time" 
                  required
                  className="w-full bg-transparent border-b border-savora-border text-savora-cream py-2 outline-none focus:border-savora-gold transition"
                />
              </div>
            </div>

            <div>
              <label className="font-body text-base text-gray-400 block mb-1">Your Message</label>
              <textarea 
                name="message" 
                rows="3"
                className="w-full bg-transparent border-b border-savora-border text-savora-cream py-2 outline-none focus:border-savora-gold transition resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="bg-savora-gold hover:bg-savora-gold-hover text-savora-dark font-body px-10 py-3 rounded-full transition mt-4"
            >
              Reserve Now
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Reservation;