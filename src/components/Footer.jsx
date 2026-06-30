import { FaFacebook, FaInstagram } from "react-icons/fa";
import { motion} from "framer-motion";
import { fadeUp } from "./Animation";
function Footer() {
  return (
    <footer className="bg-savora-dark text-savora-cream pt-16 pb-8 px-6">
      
      {/* Logo + Quick Links */}
      <motion.div {...fadeUp} className="text-center mb-12">
        <h2 className="font-heading text-4xl text-savora-gold mb-6">
          SAVORA
        </h2>
        <div className="flex flex-wrap justify-center gap-8 font-body text-base">
          <a href="#menu" className="hover:text-savora-gold transition">Menu</a>
          <a href="#gallery" className="hover:text-savora-gold transition">Gallery</a>
          <a href="#reservation" className="hover:text-savora-gold transition">Reservation</a>
          <a href="#about" className="hover:text-savora-gold transition">About</a>
          <a href="#contact" className="hover:text-savora-gold transition">Contact</a>
        </div>
      </motion.div>

      <div className="border-t border-savora-border mb-12"></div>

      {/* 3-column info grid */}
      <motion.div {...fadeUp} className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-12 font-body">
        
        <div>
          <h3 className="text-savora-gold font-heading text-xl mb-4 ">Address</h3>
          <p className="text-gray-400 mb-4">123 Gulberg Boulevard, Lahore</p>
          <div className="flex gap-3">
            <a href="#" className="bg-white text-savora-dark p-2 rounded-full hover:bg-savora-gold transition">
  <FaFacebook size={16} />
</a>
<a href="#" className="bg-white text-savora-dark p-2 rounded-full hover:bg-savora-gold transition">
  <FaInstagram size={16} />
</a>

          </div>
        </div>

        <div>
          <h3 className="text-savora-gold font-heading text-xl mb-4">Contact</h3>
          <p className="text-gray-400 mb-2">Ph#: +92 300 1234567</p>
          <p className="text-gray-400">Email: hello@savora.com</p>
        </div>

        <div>
          <h3 className="text-savora-gold font-heading text-xl mb-4">Book a Table!</h3>
          <p className="text-gray-400 mb-4">
            Reserve your spot today and enjoy an unforgettable dining experience.
          </p>
          <a 
            href="#reservation"
            className="inline-block bg-savora-gold hover:bg-savora-gold-hover text-savora-dark font-body px-6 py-2 rounded-full transition"
          >
            Reservation
          </a>
        </div>

      </motion.div>

      <motion.p {...fadeUp} className="text-center text-gray-500 text-sm font-body">
        Copyright © 2026 | Savora Restaurant
      </motion.p>

    </footer>
  );
}

export default Footer;