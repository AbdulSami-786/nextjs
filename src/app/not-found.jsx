'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Error() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">Oops! Something went wrong 😢</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        The page you’re looking for crashed or doesn’t exist. While we fix it, enjoy this mini memory game! 🎮
      </p>
      <MemoryGame />
      <GoHomeButton />
    </div>
  );
}

function GoHomeButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('/')}
      className="mt-8 px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition-all"
    >
      🔙 Go Back Home
    </button>
  );
}

function MemoryGame() {
  const emojis = ['🍕', '🚀', '🎮', '🐶', '🎲', '🎧'];
  const [shuffled, setShuffled] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    shuffleEmojis();
  }, []);

  const shuffleEmojis = () => {
    const pairs = [...emojis, ...emojis];
    const randomOrder = pairs
      .map((emoji) => ({ emoji, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((obj) => obj.emoji);
    setShuffled(randomOrder);
  };

  const handleFlip = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [first, second] = newFlipped;
      if (shuffled[first] === shuffled[second]) {
        setMatched((m) => [...m, first, second]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 800);
      }
    }
  };

  const restartGame = () => {
    setMatched([]);
    setFlipped([]);
    setMoves(0);
    shuffleEmojis();
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      <div className="grid grid-cols-4 gap-4 mb-4">
        {shuffled.map((emoji, index) => (
          <div
            key={index}
            className={`w-16 h-16 flex items-center justify-center text-2xl rounded-lg shadow-md cursor-pointer select-none 
              ${
                flipped.includes(index) || matched.includes(index)
                  ? 'bg-white'
                  : 'bg-blue-300 hover:bg-blue-400 transition'
              }`}
            onClick={() => handleFlip(index)}
          >
            {(flipped.includes(index) || matched.includes(index)) ? emoji : '❓'}
          </div>
        ))}
      </div>

      <p className="text-gray-700 mb-2">Moves: <span className="font-bold">{moves}</span></p>

      {matched.length === emojis.length * 2 && (
        <p className="text-green-600 font-semibold mb-4">🎉 You Won in {moves} moves!</p>
      )}

      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
        onClick={restartGame}
      >
        🔁 Restart Game
      </button>
    </div>
  );
}

export default Error;
