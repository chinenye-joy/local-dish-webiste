import aboutimage from "../images/about-image.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
        <motion.div 
           initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2">
            <img
              src={aboutimage}
              alt="about image"
              className="w-full h-82 rounded shadow-md object-cover"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left md:pl-10 px-4 mt-8 md:mt-0">
            <h3 className="text-3xl font-bold mb-3 mt">Our Story</h3>
            <p className="text-gray-500 font-semibold mb-4">
              Welcome to the heart of Igbo cuisine! Our menu celebrates the rich
              flavors, vibrant spices, and cultural heritage of Southeastern
              Nigeria. From traditional favorites like Ofe Oha, Abacha, and
              Nkwobi, to hearty staples like Fufu with Ofe Nsala or Egusi, every
              dish is crafted to give you a true taste of home. Whether you’re a
              proud Igbo native or simply exploring the beauty of our culture,
              our meals are made with love and rooted in tradition.
            </p>
            <p className="text-gray-500 font-semibold ">
              Fresh. Authentic. Delicious. We believe food is more than just
              nourishment it's a story, a memory, and a connection to our roots.
              That’s why our ingredients are locally sourced, and our recipes
              passed down through generations. Whether you're ordering a quick
              lunch or hosting a cultural celebration, our Igbo dishes promise
              to leave you satisfied and coming back for more.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
