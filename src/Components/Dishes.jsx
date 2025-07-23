import { motion } from "framer-motion";
import { dishes } from "../data/data";
import { useState } from "react";

const Dishes = () => {
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category)
  }

  const filteredDishes = selectedCategory ? dishes.filter((dish) => dish.category ===  selectedCategory ) : dishes
  return (
    <section id="menu" className="py-12  bg-gray-100">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center ">Featuerd Dishes</h1>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center gap-6 my-8 flex-wrap"
        >
          <button onClick={() =>handleSelectedCategory('') } className="py-2 px-3 bg-gray-200 rounded hover:bg-gray-300">
            All
          </button>
          <button onClick={() =>handleSelectedCategory('Main') } className="py-2 px-3 bg-gray-200 rounded hover:bg-gray-300">
          Main
          </button>
          <button onClick={() =>handleSelectedCategory('Main Dish') } className="py-2 px-3 bg-gray-200 rounded hover:bg-gray-300">
           Main Dish
          </button>
          <button onClick={() =>handleSelectedCategory('Appetizer') } className="py-2 px-3 bg-gray-200 rounded hover:bg-gray-300">
           Appetizer
          </button>
          <button onClick={() =>handleSelectedCategory('Expensive Dish') } className="py-2 px-3 bg-gray-200 rounded hover:bg-gray-300">
           Expensive Dishes
          </button>
          <button onClick={() =>handleSelectedCategory('Vegetable') } className="py-2 px-3 bg-gray-200 rounded hover:bg-gray-300">
           Vegetable
          </button>
           {/* <button onClick={() =>handleSelectedCategory('Ofe Nsala') } className="py-2 px-3 bg-gray-200 rounded hover:bg-gray-300">
         Ofe Nsala
          </button> */}
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredDishes.map((dish) => (
            <motion.div
             initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
            key={dish.id} className="px-5 py-4 rounded shadow bg-white">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-60 object-cover rounded p-2"
              />
              <h3 className="text-xl font-bold mt-4 mb-1">{dish.name}</h3>
              <p className="text-gray-600">{dish.description}</p>
              <p className="text-emerald-500 font-bold mt-2">{dish.price}</p>
              <button className="bg-emerald-600 text-white mt-4 px-4 py-2 rounded hover:bg-emerald-700">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dishes;
