import Aboutimg from "../assets/about.jpg"
import { motion } from "framer-motion";
import { fadeUp } from "./Animation";
function About() {
  return (
    <section id="about" className="bg-savora-dark text-savora-cream min-h-screen md:h-screen scroll-mt-14 px-6 flex flex-col justify-center py-20 md:py-0">
      
      {/* Top: existing 2-column grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 w-full">
        
        {/* Image */}
        <div  className=" h-full md:h-auto">
          <img 
            src={Aboutimg} 
            alt="Savora Restaurant" 
            className="rounded-lg w-full h-129 object-cover"
          />
        </div>

        {/* Text content */}
        <div>
          <motion.p  {...fadeUp} className="font-body text-savora-gold uppercase tracking-widest text-base mb-3 font-bold">
            Welcome to Savora
          </motion.p>
          <motion.h2 {...fadeUp} className="font-heading text-4xl md:text-6xl mb-6 font-bold">
            About Savora
          </motion.h2>
          <motion.p  {...fadeUp} className="font-body text-lg mb-4 leading-relaxed text-gray-300">
            At Savora, we invite you on a culinary journey where Italian 
            elegance meets Asian fusion. Our menu brings together the 
            finest in handmade pasta, fresh sushi, and bold Asian flavors, 
            crafted with care and precision.
          </motion.p>
          <motion.p  {...fadeUp} className="font-body text-lg mb-3 leading-relaxed text-gray-300">
            Every dish tells a story — blending tradition with innovation 
            to create a dining experience that's both refined and 
            unforgettable. At the heart of Savora is a passion for bringing 
            people together over exceptional food.
          </motion.p>
          <div className="flex gap-8 mt-2 mb-7">
            <div>
              <motion.p  {...fadeUp} className="font-heading text-3xl text-savora-gold">15+</motion.p>
              <motion.p  {...fadeUp} className="font-body text-sm text-gray-400">Signature Dishes</motion.p>
            </div>
            <div>
              <motion.p  {...fadeUp} className="font-heading text-3xl text-savora-gold">2024</motion.p>
              <motion.p  {...fadeUp} className="font-body text-sm text-gray-400">Est. Since</motion.p>
            </div>
            <div>
              <motion.p  {...fadeUp} className="font-heading text-3xl text-savora-gold">5★</motion.p>
              <motion.p  {...fadeUp} className="font-body text-sm text-gray-400">Dining Experience</motion.p>
            </div>
          </div>
          <a 
            href="#menu" 
            className="inline-block bg-savora-gold hover:bg-savora-gold-hover text-savora-dark font-body px-8 py-3 rounded transition"
          >
            View Our Menu
          </a>
        </div>

      </div>

      {/* Bottom: full-width quote */}
      <div className="max-w-3xl mx-auto text-center mt-9">
        <motion.p  {...fadeUp} className="font-heading text-2xl md:text-3xl italic text-savora-cream">
          "Where every dish tells a story, and every visit becomes a memory."
        </motion.p>
      </div>
      

    </section>
  );
}

export default About;