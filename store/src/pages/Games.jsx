import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Import game images
import jengaImage from '@/assets/jegena2.png';
import unoImage from '@/assets/uno.jpg';
import dartImage from '@/assets/dart.jpg';

// Example game data
const otherGames = [
  { img: jengaImage, name: 'Jenga', category: 'Table Top Games', price: '125.99 birr', originalPrice: '500.99 birr', discount: '-25%' },
  { img: unoImage, name: 'UNO', category: 'Table Top Games', price: '125.99 birr', originalPrice: '500.99 birr', discount: '-25%' },
  { img: dartImage, name: 'Dart', category: 'Physical Games', price: '125.99 birr', originalPrice: '500.99 birr', discount: '-25%' },
  
];

const Games = () => {
  const { gameName } = useParams();
  
  const currentGame = otherGames.find(game => game.name === gameName);

  if (!currentGame) {
    return <p className="text-center text-red-500 text-xl">Game not found.</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Game Store</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Back Arrow */}
        <div className="container mx-auto py-4 px-4">
          <Link to="/" className="text-green-600 flex items-center">
            <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-lg font-medium">Back to Home</span>
          </Link>
        </div>

        {/* Game Detail Section */}
        <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8">
          <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-3xl w-full mx-4 md:mx-auto">
            <h1 className="text-3xl text-gray-800 font-bold mb-4">Game Details</h1>
            <p className="text-xl text-gray-700 mb-4">You are viewing details for: <strong className="font-bold">{gameName}</strong></p>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <img 
                src={currentGame.img} 
                alt={currentGame.name} 
                className="w-64 h-64 object-cover mx-auto mb-4 rounded-md" 
              />
              <button
                onClick={() => alert(`You have purchased ${currentGame.name}`)}
                className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
              >
                Purchase {currentGame.name}
              </button>
            </div>
          </div>
        </div>

        {/* Other Games Section */}
        <div className="container mx-auto py-8 px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Other Games You Might Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {otherGames.map((game, index) => (
              <Link key={index} to={`/games/${game.name}`} className="block">
                <div className="bg-gray-800 rounded-md p-4 shadow-md hover:shadow-lg transition-shadow hover:scale-105 transform duration-300">
                  <img 
                    src={game.img} 
                    alt={game.name} 
                    className="w-full h-40 object-cover rounded-md transition-transform duration-300 transform hover:scale-110" 
                  />
                  <div className="text-center mt-4">
                    <p className="text-xl font-bold text-white">{game.name}</p>
                    <p className="text-gray-400">{game.category}</p>
                    <div className="flex justify-center items-center mt-2">
                      <span className="text-green-400 text-sm mr-2">{game.discount}</span>
                      <span className="line-through text-gray-500 text-sm">{game.originalPrice}</span>
                    </div>
                    <p className="text-white text-lg">{game.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-600 text-white p-4 text-center shadow-md">
        <p>&copy; 2024 Game Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Games;
