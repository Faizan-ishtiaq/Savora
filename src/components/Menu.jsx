import { menuData } from "../data/menuData";
import { fadeUp } from "./Animation";
import { motion } from "framer-motion";

function Menu() {
  return (
    <section id="menu" className="bg-savora-cream text-savora-dark py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        <p className="font-body text-savora-gold uppercase tracking-widest text-sm mb-3 text-center">
          Taste the Difference
        </p>
        <motion.h2  {...fadeUp} className="font-heading text-4xl md:text-5xl mb-12 text-center">
          Our Menu
        </motion.h2>

        {/* Starters */}
        <div className="mb-12">
          <h3 className="font-heading text-3xl mb-6 text-savora-gold">Starters</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {menuData.starters.map((item,index) => (
              <motion.div 
               key={item.name} 
               className="flex justify-between border-b border-savora-border pb-2"
               initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}>
                
                <div>
                  <p className="font-body text-lg font-semibold">{item.name}</p>
                  <p className="font-body text-base text-gray-600">{item.description}</p>
                </div>
                <p className="font-body font-semibold text-savora-gold whitespace-nowrap ml-4">
                  {item.price}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Course */}
        <div className="mb-12">
          <h3 className="font-heading text-3xl mb-6 text-savora-gold">Main Course</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {menuData.mainCourse.map((item,index) => (
              <motion.div  key={item.name}
               className="flex justify-between border-b border-savora-border pb-2"
               initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div>
                  <p className="font-body font-semibold">{item.name}</p>
                  <p className="font-body text-base text-gray-600">{item.description}</p>
                </div>
                <p className="font-body font-semibold text-savora-gold whitespace-nowrap ml-4">
                  {item.price}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desserts */}
        <div className="mb-12">
          <h3 className="font-heading text-3xl mb-6 text-savora-gold">Desserts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {menuData.desserts.map((item,index) => (
              <motion.div key={item.name} 
              className="flex justify-between border-b border-savora-border pb-2"
              initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div>
                  <p className="font-body font-semibold">{item.name}</p>
                  <p className="font-body text-base text-gray-600">{item.description}</p>
                </div>
                <p className="font-body font-semibold text-savora-gold whitespace-nowrap ml-4">
                  {item.price}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Drinks */}
        <div>
          <h3 className="font-heading text-3xl mb-6 text-savora-gold">Drinks</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {menuData.drinks.map((item,index) => (
              <motion.div key={item.name}
               className="flex justify-between border-b border-savora-border pb-2"
               initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <p className="font-body font-semibold">{item.name}</p>
                <p className="font-body font-semibold text-savora-gold whitespace-nowrap ml-4">
                  {item.price}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Menu;