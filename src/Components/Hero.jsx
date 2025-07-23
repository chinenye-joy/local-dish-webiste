import heroimage from "../images/hero-image.avif";
import ofensala from "../images/Ofe-Nsala.jpg"
import bg from "../images/oha.jpg"

const Hero = () => {
  return (
    <section
      id="home"
      className="py-12 relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
        
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className=" text-center z-10">
        <h1 className="text-4xl md:text-6xl text-white font-bold px-6">
          Bringing You the Flavour of Home.
        </h1>
        <p className="text-lg md:text-2xl px-6 text-white my-6 text-center">
          
          Satisfy your cravings with authentic local meals cooked just the way
          you love it.
        </p>
        <button className="bg-emerald-700 text-white px-6 mt-2 py-3 rounded hover:bg-emerald-800">
          Explore Menu
        </button>
      </div>
    </section>
  );
};

export default Hero;
