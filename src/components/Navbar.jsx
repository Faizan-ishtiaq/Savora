import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-savora-dark/90 text-savora-cream px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        
        {/* Left links */}
        <ul className="hidden md:flex items-center gap-10 font-body text-xl flex-1">
          
          <li><a href="#about" className="hover:text-savora-gold transition">About</a></li>
          <li><a href="#menu" className="hover:text-savora-gold transition">Menu</a></li>
          <li><a href="#ai-chat" className="hover:text-savora-gold transition">AI Picks</a></li>
         
        </ul>

        {/* Centered logo */}
        <a href="#home">
        <h1 className="font-heading text-4xl text-savora-gold tracking-wide text-center cursor-pointer">
          SAVORA
        </h1>
        </a>

        {/* Right links */}
        <ul className="hidden md:flex items-center justify-end gap-10 font-body text-xl flex-1">
            <li><a href="#gallery" className="hover:text-savora-gold transition">Gallery</a></li>
          <li><a href="#reservation" className="hover:text-savora-gold transition">Reservation</a></li>
          <li><a href="#contact" className="hover:text-savora-gold transition">Contact</a></li>
        </ul>

        {/* Hamburger - Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
       

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 mt-4 font-body text-lg">
           <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a></li>
          <li><a href="#ai-chat" onClick={() => setMenuOpen(false)}>AI Picks</a></li>
          <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
          <li><a href="#reservation" onClick={() => setMenuOpen(false)}>Reservation</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;