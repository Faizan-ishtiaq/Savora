import barimg from "../assets/bar.jpg"
import cakeimg from "../assets/cake.jpg"
import darkimg from "../assets/dark.jpg"
import dark1img from "../assets/dark1.jpg"
import drink_table from "../assets/drinks_table.jpg"
import interior from "../assets/interior_dining.jpg"
import table from "../assets/table.jpg"
import table1 from "../assets/table1.jpg"
import table3 from "../assets/table3.jpg"
import { fadeUp } from "./Animation";
import { motion } from "framer-motion";

const galleryImgs=[
  barimg,
  cakeimg,
  dark1img,
  darkimg,
  drink_table,
  interior,
  table,
  table1,
  table3
]

function Gallery() {
  return (
    <section id="gallery" className="bg-savora-dark py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        <p className="font-body text-savora-gold uppercase tracking-widest text-base mb-3 text-center">The Experience</p>
        <motion.h2 {...fadeUp} className="font-heading text-4xl md:text-5xl mb-12 text-center text-savora-cream">Our Ambiance</motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImgs.map((img,index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-lg group ${index === 8 ? 'hidden lg:block' : ''}`}
              
            >
              <img 
                src={img} 
                alt="Savora Gallery"
                width="400"
                height="256"
                decoding="async"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-savora-dark/0 group-hover:bg-savora-dark/30 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery