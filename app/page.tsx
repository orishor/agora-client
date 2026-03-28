"use client";
import { useState } from "react";

export default function SwipeApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const mockData = [
    { id: 1, title: "Item 1", description: "First item from Agora" },
    { id: 2, title: "Item 2", description: "Second item from Agora" },
    { id: 3, title: "Item 3", description: "Third item from Agora" },
  ];

  const handleSwipe = (direction: string) => {
    console.log(`Swiped ${direction} on ${mockData[currentIndex].title}`);
    setCurrentIndex((prev) => prev + 1);
  };

  if (currentIndex >= mockData.length) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 text-black">
        <h2 className="text-xl font-bold">No more items!</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-sm text-center text-black">
        <h1 className="text-3xl font-bold mb-4">{mockData[currentIndex].title}</h1>
        <p className="text-gray-600 mb-8">{mockData[currentIndex].description}</p>
        
        <div className="flex justify-between w-full gap-4">
          <button 
            onClick={() => handleSwipe("left")}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            Pass
          </button>
          <button 
            onClick={() => handleSwipe("right")}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            Like
          </button>
        </div>
      </div>
    </div>
  );
}