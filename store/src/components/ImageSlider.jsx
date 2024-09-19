import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Uno from '@/assets/uno.jpg';
import Chess from '@/assets/chess.jpg';
import Cards from '@/assets/cards.jpg';
import CartIcon from '@/assets/Cart.png'; // Import the cart icon image

function ImageSlider() {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 3);
      return updatedIndexes;
    });
  };

  const images = [
    { src: Uno, alt: 'Uno', text: 'Uno', price: '150 Birr' },
    { src: Chess, alt: 'Chess', text: 'Chess', price: '200 Birr' },
    { src: Cards, alt: 'Cards', text: 'Cards', price: '100 Birr' },
  ];

  const positions = ['center', 'left', 'right'];

  const imageVariants = {
    center: { x: '0%', scale: 1, zIndex: 3 },
    left: { x: '-50%', scale: 0.5, zIndex: 0 },
    right: { x: '50%', scale: 0.5, zIndex: 1 },
  };

  return (
    <div className='flex items-center flex-col h-screen'>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="w-[40%] h-auto"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration:1}}
          style={{ position: 'absolute' }}
          onMouseEnter={handleNext} // Trigger the next image on hover
        >
          <motion.img
            src={image.src}
            alt={image.alt}
            className="rounded-[12px] w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 rounded-b-[12px] text-white">
            <h3 className="text-xl mb-2">{image.text}</h3>
            <p className="text-sm mb-4">{image.price}</p> {/* Display price */}
            <div className="flex gap-2">
              <button className="bg-green-500 px-4 py-2 rounded-md flex items-center">
                <img src={CartIcon} alt="Cart" className="w-5 h-5 mr-2" />
                Purchase Now
              </button>
              <button className="bg-slate-500 bg-opacity-60 px-4 py-2 rounded-md">
                Add to Wishlist
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ImageSlider;
