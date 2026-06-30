import herovid from "../assets/Hero.mp4"

function Hero() {
 
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden pb-8">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={herovid} type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-savora-dark/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1  className="font-heading text-5xl md:text-7xl text-savora-cream mb-3">
          SAVORA
        </h1>
        <p className="font-body text-lg md:text-xl text-savora-cream mb-8 max-w-xl mt-2">
          Where Italian Elegance Meets Asian Fusion
        </p>
        <a
          href="#reservation"
          className="bg-savora-gold hover:bg-savora-gold-hover text-savora-dark font-body px-8 py-3 rounded transition"
        >
          Reserve a Table
        </a>
      </div>
      
    </section>
  );
}

export default Hero;