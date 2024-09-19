import React, { useState } from 'react';
import unoImage from '@/assets/uno.jpg'; // Update the path to your actual image path
import jegenaImage from '@/assets/jegena2.png'; // Update the path to your actual image path
import cardImage from '@/assets/cards.jpg'; // Update the path to your actual image path

function Cart() {
  // State to manage quantity for each item
  const [quantityUno, setQuantityUno] = useState(1);
  const [quantityJegena, setQuantityJegena] = useState(1);
  const [quantityCard, setQuantityCard] = useState(1);

  // Handler functions to update quantity
  const increaseQuantity = (setQuantity) => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = (setQuantity) => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="flex p-4 bg-gray-800">
      {/* Main content container with padding and space from start */}
      <div className="flex flex-col space-y-4 w-full max-w-3xl mr-6 pl-12 pr-4">
        {/* Heading */}
        <div className="text-5xl text-white mb-4">My Cart</div>

        {/* Container for Each Item */}
        <div className="flex items-start space-x-4 border-2 border-white p-4 rounded-lg bg-gray-800">
          <img src={unoImage} alt="Uno" className="w-32 h-32 object-cover rounded-lg" />
          
          <div className="flex flex-col justify-between ml-4 space-y-2">
            <div className="text-white text-xl">Uno</div>
            <div className="flex flex-col">
              <div className="text-white text-xl">Table Tap Game</div>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-white text-xl">13+</span>
                <span className="text-white text-xl">199</span>
                <span className="text-white text-xl">Birr</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <button
                onClick={() => decreaseQuantity(setQuantityUno)}
                className="bg-gray-700 text-white px-2 py-1 rounded"
              >
                -
              </button>
              <span className="text-white text-xl">{quantityUno}</span>
              <button
                onClick={() => increaseQuantity(setQuantityUno)}
                className="bg-gray-700 text-white px-2 py-1 rounded"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col items-end ml-auto space-y-2">
            <button className="bg-gray-700 text-white border-2 border-green-500 px-4 py-2 rounded flex items-center space-x-2">
              <span>Move to Wishlist</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </button>
            <button className="bg-gray-700 text-white border-2 border-red-500 px-4 py-2 rounded flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Delete</span>
            </button>
          </div>
        </div>

        {/* Repeat the structure for other items with different states */}
        <div className="flex items-start space-x-4 border-2 border-white p-4 rounded-lg bg-gray-800">
          <img src={jegenaImage} alt="Jegena" className="w-32 h-32 object-cover rounded-lg" />
          
          <div className="flex flex-col justify-between ml-4 space-y-2">
            <div className="text-white text-xl">Jegena</div>
            <div className="flex flex-col">
              <div className="text-white text-xl">Table Tap Game</div>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-white text-xl">13+</span>
                <span className="text-white text-xl">199</span>
                <span className="text-white text-xl">Birr</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <button
                onClick={() => decreaseQuantity(setQuantityJegena)}
                className="bg-gray-700 text-white px-2 py-1 rounded"
              >
                -
              </button>
              <span className="text-white text-xl">{quantityJegena}</span>
              <button
                onClick={() => increaseQuantity(setQuantityJegena)}
                className="bg-gray-700 text-white px-2 py-1 rounded"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col items-end ml-auto space-y-2">
            <button className="bg-gray-700 text-white border-2 border-green-500 px-4 py-2 rounded flex items-center space-x-2">
              <span>Move to Wishlist</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </button>
            <button className="bg-gray-700 text-white border-2 border-red-500 px-4 py-2 rounded flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Delete</span>
            </button>
          </div>
        </div>

        <div className="flex items-start space-x-4 border-2 border-white p-4 rounded-lg bg-gray-800">
          <img src={cardImage} alt="Card" className="w-32 h-32 object-cover rounded-lg" />
          
          <div className="flex flex-col justify-between ml-4 space-y-2">
            <div className="text-white text-xl">Card</div>
            <div className="flex flex-col">
              <div className="text-white text-xl">Table Tap Game</div>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-white text-xl">13+</span>
                <span className="text-white text-xl">199</span>
                <span className="text-white text-xl">Birr</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <button
                onClick={() => decreaseQuantity(setQuantityCard)}
                className="bg-gray-700 text-white px-2 py-1 rounded"
              >
                -
              </button>
              <span className="text-white text-xl">{quantityCard}</span>
              <button
                onClick={() => increaseQuantity(setQuantityCard)}
                className="bg-gray-700 text-white px-2 py-1 rounded"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col items-end ml-auto space-y-2">
            <button className="bg-gray-700 text-white border-2 border-green-500 px-4 py-2 rounded flex items-center space-x-2">
              <span>Move to Wishlist</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </button>
            <button className="bg-gray-700 text-white border-2 border-red-500 px-4 py-2 rounded flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>

      {/* Larger container */}
      <div className="w-2/2 bg-gray-700 p-4 rounded-lg">
        <div className="text-white text-xl mb-4">Order summery</div>
        <p className="text-white">This container is larger and placed beside the three items with some space in between.</p>
        {/* Add additional content here as needed */}
      </div>
    </div>
  );
}

export default Cart;
