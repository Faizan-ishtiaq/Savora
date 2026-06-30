import contactimg from "../assets/contact.jpg"
import { fadeUp } from "./Animation";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="bg-savora-dark text-savora-cream py-20 px-6 scroll-mt-10">
        <div className="text-center mb-16">
            <motion.p {...fadeUp} className="font-body text-savora-gold uppercase tracking-widest text-base ">Get in touch</motion.p>
        <motion.h2 {...fadeUp} className="font-heading text-4xl md:text-6xl">
        Our Contact
        </motion.h2></div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text content */}
        <div>
          <p className="font-body text-savora-gold uppercase tracking-widest text-sm mb-3">
            Get In Touch
          </p>
          <motion.h2 {...fadeUp} className="font-heading text-4xl md:text-5xl mb-8">
            Visit Us
          </motion.h2>

          <motion.div {...fadeUp} className="space-y-6 font-body">
            <div>
              <p className="font-semibold mb-1">Address</p>
              <p className="text-gray-400">123 Gulberg Boulevard, Lahore, Pakistan</p>
            </div>

            <div>
              <p className="font-semibold mb-1">Phone</p>
              <p className="text-gray-400">+92 300 1234567</p>
            </div>

            <div>
              <p className="font-semibold mb-1">Email</p>
              <p className="text-gray-400">hello@savora.com</p>
            </div>

            <div>
              <p className="font-semibold mb-1">Hours</p>
              <p className="text-gray-400">Mon - Sun: 12:00 PM - 11:00 PM</p>
            </div>
          </motion.div>
        </div>

        {/* Image */}
        <fiv className="h-96 md:h-112.5">
          <img 
            src={contactimg} 
            alt="Contact Savora" 
            className="rounded-lg w-full h-full object-cover"
          />
        </fiv>

      </div>

      {/* Embedded Map */}
      <div className="w-full mx-auto mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9568.058363052745!2d74.3403385851549!3d31.527207112724277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904fa04aceaed%3A0x1d64146a56cd2c7c!2sGulberg%202%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1782654555750!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        />
      </div>

    </section>
  );
}

export default Contact;