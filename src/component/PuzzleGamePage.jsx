// App.jsx
import React, { useState, useEffect } from 'react';

// LoadingScreen Component
const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading process
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1; // Increment by 1% each time
        } else {
          clearInterval(interval);
          // Call the callback when loading is complete,
          // wrapped in setTimeout to defer state update
          setTimeout(() => {
            onLoadingComplete();
          }, 0);
          return 100;
        }
      });
    }, 30); // Adjust interval for desired speed

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [onLoadingComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fddde6] to-[#fce4ec] font-inter">
      <div className="relative w-72 h-36 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Loading...</h2>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-pink-500 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-lg font-medium text-gray-700">{progress}%</p>
      </div>
    </div>
  );
};

// HomeMenu Component
const HomeMenu = ({ onNavigate }) => {
  const menuItems = [
    {
      label: "Memories",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-pink-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175m0 0a2.296 2.296 0 00-.73-1.036V3.09c0-1.06.84-1.92 1.875-1.92h.825m1.516 1.516l-7.442 7.442m3.674 4.353V9.069C13.235 11.168 15 14.38 15 17.5a6.75 6.75 0 01-13.352 2.657 2.31 2.31 0 01-.157-.962m12.445-8.348C17.009 10.979 19 14.075 19 17.5c0 1.05-.18 2.073-.528 3.028m-8.914-1.259c.264-.403.555-.807.871-1.205m-.182-5.466C11.515 10.155 13 8.38 13 6a2.25 2.25 0 00-2.25-2.25H9.75A2.25 2.25 0 007.5 6c0 1.638.742 3.123 1.94 4.195M12 4.5l4.5 4.5m-4.5 4.5l4.5 4.5"
          />
        </svg>
      ),
      path: 'memories',
    },
    {
      label: "Calendar",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-purple-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5m18 7.5v-7.5m-9 5.25h.008v.008H12v-.008zm0 2.25h.008v.008H12v-.008zm-2.25 0h.008v.008H9.75v-.008zM9.75 18h.008v.008H9.75V18zm0-2.25h.008v.008H9.75v-.008zM6.75 18h.008v.008H6.75V18zm0-2.25h.008v.008H6.75v-.008z"
          />
        </svg>
      ),
      path: 'calendar',
    },
    {
      label: "Puzzle",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-blue-600"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.172-5.469a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-1.75-1.75a.75.75 0 011.06-1.06l1.22-1.22 3.72-3.72zM10.738 7.232a.75.75 0 00-1.06 1.06l1.22 1.22 1.75 1.75a.75.75 0 001.06-1.06l-1.75-1.75-1.22-1.22zM6.92 14.073a.75.75 0 00-1.06 1.06l4.25 4.25a.75.75 0 001.06 0l1.75-1.75a.75.75 0 00-1.06-1.06l-1.22 1.22-3.72-3.72z"
            clipRule="evenodd"
          />
        </svg>
      ),
      path: 'puzzle',
    },
    {
      label: "Messages",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-green-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12.75V12A2.25 2.25 0 004.5 9.75h15A2.25 2.25 0 0021.75 12v.75m-4.5-7.5a.75.75 0 00-.75.75v12.75a.75.75 0 00.75.75h-.75a.75.75 0 01-.75-.75V12a2.25 2.25 0 00-2.25-2.25H9.75A2.25 2.25 0 007.5 12v7.5a.75.75 0 01-.75.75H6a.75.75 0 00-.75.75v-12.75A.75.75 0 005.25 5.25h-.75V6.75"
          />
        </svg>
      ),
      path: 'messages',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fddde6] to-[#fce4ec] font-inter p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-pink-700 mb-8 tracking-wide">
          Our Special Moments
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center bg-white p-6 rounded-2xl shadow-md cursor-pointer
                         transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg
                         w-36 h-36 justify-center"
              style={{ backgroundColor: 'rgb(255, 240, 245, 0.7)' }} // Pastel pinkish background for cards
              onClick={() => onNavigate(item.path)}
            >
              <div className="mb-3">{item.icon}</div>
              <p className="text-lg font-semibold text-gray-800">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// MemoriesPage Component
const MemoriesPage = ({ onBack }) => {
  const images = [
    { src: "uploaded:image_d85125.jpg-6c5d0d31-0d38-4e7c-a98f-d2cd59e9aee7", alt: "First Trip", caption: "First trip" },
    { src: "https://placehold.co/400x600/fce4ec/333333?text=Memory+2", alt: "Memory 2", caption: "Beach day" },
    { src: "https://placehold.co/400x600/fddde6/333333?text=Memory+3", alt: "Memory 3", caption: "Our adventure" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left (next image)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    if (touchStart - touchEnd < -75) {
      // Swiped right (previous image)
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#fddde6] to-[#fce4ec] font-inter p-4 relative">
      <div className="absolute top-8 left-8">
        <button
          onClick={onBack}
          className="flex items-center text-pink-700 font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
          style={{ backgroundColor: 'rgb(255, 240, 245, 0.7)' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Back
        </button>
      </div>

      <h1 className="text-4xl font-extrabold text-pink-700 mt-16 mb-8 tracking-wide">
        Our Sweet Moments
      </h1>

      <div
        className="relative w-[300px] h-[450px] sm:w-[350px] sm:h-[525px] md:w-[400px] md:h-[600px] max-w-full
                   overflow-hidden rounded-xl shadow-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out
                      flex flex-col items-center justify-center p-4 bg-white rounded-xl`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%) rotate(${(index - currentIndex) * 5}deg)`,
              zIndex: images.length - Math.abs(index - currentIndex), // Ensures correct stacking
              opacity: index === currentIndex ? 1 : 0.8,
              transformOrigin: 'bottom center', // Rotate from bottom center
              boxShadow: index === currentIndex ? '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)' : 'none',
              borderRadius: '12px',
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x600/cccccc/333333?text=Image+Error"; }}
            />
            <p className="absolute bottom-4 text-white text-lg font-semibold bg-black bg-opacity-50 px-3 py-1 rounded-md">
              {image.caption}
            </p>
          </div>
        ))}
      </div>

      {/* New Card Section */}
      <div className="mt-10 bg-white rounded-2xl shadow-lg p-6 text-center max-w-sm mx-auto">
        <h2 className="text-2xl font-bold text-pink-700 mb-2">Best Moments with You</h2>
        <p className="text-gray-700 text-lg">You're My Happy Place</p>
      </div>
    </div>
  );
};


// CalendarPage Component
const CalendarPage = ({ onBack }) => {
  const startDate = new Date('2023-01-15T00:00:00'); // Example start date: January 15, 2023

  const [timeLapsed, setTimeLapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLapsed = () => {
      const now = new Date();
      let diffSeconds = Math.floor((now - startDate) / 1000);

      const years = Math.floor(diffSeconds / (365 * 24 * 60 * 60));
      diffSeconds -= years * (365 * 24 * 60 * 60);

      const months = Math.floor(diffSeconds / (30 * 24 * 60 * 60)); // Approximation for months
      diffSeconds -= months * (30 * 24 * 60 * 60);

      const days = Math.floor(diffSeconds / (24 * 60 * 60));
      diffSeconds -= days * (24 * 60 * 60);

      const hours = Math.floor(diffSeconds / (60 * 60));
      diffSeconds -= hours * (60 * 60);

      const minutes = Math.floor(diffSeconds / 60);
      diffSeconds -= minutes * 60;

      const seconds = diffSeconds;

      setTimeLapsed({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    };

    // Calculate immediately on mount
    calculateTimeLapsed();

    // Update every second
    const intervalId = setInterval(calculateTimeLapsed, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [startDate]); // Re-run effect if startDate changes

  const formatTime = (value) => String(value).padStart(2, '0');

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#fddde6] to-[#fce4ec] font-inter p-4 relative">
      <div className="absolute top-8 left-8">
        <button
          onClick={onBack}
          className="flex items-center text-pink-700 font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
          style={{ backgroundColor: 'rgb(255, 240, 245, 0.7)' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Back
        </button>
      </div>

      <h1 className="text-4xl font-extrabold text-pink-700 mt-16 mb-4 tracking-wide">
        Our Love Journey
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        យើងនៅជាមួយគ្នាយូរប៉ុណ្ណាហើយ?
      </p>

      {/* Circular Image */}
      <div className="mb-8 w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-white">
        <img
          src="uploaded:image_e24daa.jpg-69c2b437-2eee-470e-b2ca-6473d197ed4b"
          alt="Couple"
          className="w-full h-full object-cover"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/160x160/fce4ec/333333?text=Love"; }}
        />
      </div>

      {/* Countdown Display */}
      <div className="flex justify-center items-center space-x-4 mb-8 text-center">
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold text-pink-700">{formatTime(timeLapsed.years)}</span>
          <span className="text-sm text-gray-600">Year</span>
        </div>
        <span className="text-5xl font-bold text-pink-700">.</span>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold text-pink-700">{formatTime(timeLapsed.months)}</span>
          <span className="text-sm text-gray-600">Month</span>
        </div>
        <span className="text-5xl font-bold text-pink-700">.</span>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold text-pink-700">{formatTime(timeLapsed.days)}</span>
          <span className="text-sm text-gray-600">Days</span>
        </div>
        <span className="text-5xl font-bold text-pink-700">.</span>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold text-pink-700">{formatTime(timeLapsed.hours)}</span>
          <span className="text-sm text-gray-600">Hours</span>
        </div>
        <span className="text-5xl font-bold text-pink-700">.</span>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold text-pink-700">{formatTime(timeLapsed.minutes)}</span>
          <span className="text-sm text-gray-600">Minutes</span>
        </div>
        <span className="text-5xl font-bold text-pink-700">.</span>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold text-pink-700">{formatTime(timeLapsed.seconds)}</span>
          <span className="text-sm text-gray-600">Seconds</span>
        </div>
      </div>

      <div className="text-center">
        <p className="text-lg text-gray-700 mb-2">
          យើងបានស្រលាញ់គ្នាអស់រយៈពេល...
        </p>
        <p className="text-2xl font-bold text-red-500">
          ❤️ ស្រលាញ់អ្នក ៣០០០ ណា ❤️
        </p>
      </div>
    </div>
  );
};


// PuzzleGamePage Component
const PuzzleGamePage = ({ onBack }) => {
  const initialImages = [
    { src: "uploaded:image_521aa6.jpg-28d0404e-a6b7-47d6-a6a7-b0c7d61a0fba", id: 1 }, // first image (girl)
    { src: "uploaded:image_5270c1.jpg-7d613a7c-9bb5-4f8b-8426-7bd2d8ae366e", id: 2 }, // second image (boy)
    { src: "https://placehold.co/100x100/ffb6c1/ffffff?text=A", id: 3 }, // Placeholder A
    { src: "https://placehold.co/100x100/ff69b4/ffffff?text=B", id: 4 }, // Placeholder B
    // Add more unique images if you want a larger grid, ensuring an even number for pairs
  ];

  // Create pairs and shuffle
  const initializeCards = () => {
    const duplicatedImages = [...initialImages, ...initialImages];
    // Shuffle the cards
    return duplicatedImages
      .sort(() => Math.random() - 0.5)
      .map((image, index) => ({
        ...image,
        index,
        isFlipped: false,
        isMatched: false,
      }));
  };

  const [cards, setCards] = useState(initializeCards);
  const [flippedCards, setFlippedCards] = useState([]); // Stores indices of flipped cards
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [showWinMessage, setShowWinMessage] = useState(false);
  const [canFlip, setCanFlip] = useState(true); // Control card flipping during comparison

  useEffect(() => {
    // Check for win condition
    if (matchedPairs === initialImages.length && initialImages.length > 0) {
      setTimeout(() => {
        setShowWinMessage(true);
      }, 500); // Small delay before showing win message
    }
  }, [matchedPairs, initialImages.length]);

  const handleCardClick = (clickedIndex) => {
    if (!canFlip || cards[clickedIndex].isFlipped || cards[clickedIndex].isMatched) {
      return; // Cannot flip if already flipped, matched, or if flipping is disabled
    }

    setCards((prevCards) =>
      prevCards.map((card, index) =>
        index === clickedIndex ? { ...card, isFlipped: true } : card
      )
    );

    setFlippedCards((prevFlipped) => [...prevFlipped, clickedIndex]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setCanFlip(false); // Disable flipping while checking cards
      const [index1, index2] = flippedCards;
      const card1 = cards[index1];
      const card2 = cards[index2];

      if (card1.id === card2.id) {
        // Match found!
        setMatchedPairs((prevCount) => prevCount + 1);
        setCards((prevCards) =>
          prevCards.map((card, index) =>
            index === index1 || index === index2 ? { ...card, isMatched: true } : card
          )
        );
        setFlippedCards([]); // Clear flipped cards
        setCanFlip(true); // Re-enable flipping
      } else {
        // No match, flip back after a delay
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card, index) =>
              index === index1 || index === index2 ? { ...card, isFlipped: false } : card
            )
          )
          setFlippedCards([]); // Clear flipped cards
          setCanFlip(true); // Re-enable flipping
        }, 1000); // Flip back after 1 second
      }
    }
  }, [flippedCards, cards]);

  const resetGame = () => {
    setCards(initializeCards());
    setFlippedCards([]);
    setMatchedPairs(0);
    setShowWinMessage(false);
    setCanFlip(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#fddde6] to-[#fce4ec] font-inter p-4 relative overflow-hidden">
      {/* Background Hearts */}
      {[...Array(15)].map((_, i) => (
        <span
          key={i}
          className="absolute text-pink-400 opacity-30 animate-heart-float text-3xl"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
            zIndex: 0,
          }}
        >
          ❤️
        </span>
      ))}

      <style>
        {`
        @keyframes heart-float {
          0% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.5; }
          100% { transform: translateY(0) scale(1); opacity: 0.3; }
        }
        `}
      </style>

      <div className="absolute top-8 left-8 z-10">
        <button
          onClick={onBack}
          className="flex items-center text-pink-700 font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
          style={{ backgroundColor: 'rgb(255, 240, 245, 0.7)' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Back
        </button>
      </div>

      <div className="relative bg-white rounded-3xl shadow-xl p-8 max-w-lg mx-auto text-center mt-16 z-10">
        <h1 className="text-4xl font-extrabold text-pink-700 mb-4 tracking-wide">
          អនុស្សាវរីយ៍សម្រាប់អ្នក
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          ផ្គូផ្គងរូបភាពដែលលាក់!
        </p>

        <div className="grid grid-cols-4 gap-4 justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg shadow-md cursor-pointer transition-transform duration-300
                          ${card.isFlipped || card.isMatched ? 'rotate-y-180' : ''}`}
              onClick={() => handleCardClick(index)}
              style={{ perspective: '1000px' }} // Needed for 3D flip
            >
              <div
                className={`absolute w-full h-full rounded-lg backface-hidden flex items-center justify-center bg-blue-300 text-white text-5xl font-bold
                            ${card.isFlipped || card.isMatched ? 'rotate-y-180' : ''}`}
                style={{
                  transformStyle: 'preserve-3d',
                  backgroundColor: 'rgb(255, 240, 245, 0.9)'
                }}
              >
                {/* Front of the card (image) */}
                <img
                  src={card.src}
                  alt={`Card ${card.id}`}
                  className={`absolute w-full h-full object-cover rounded-lg backface-hidden ${
                    !(card.isFlipped || card.isMatched) ? 'rotate-y-180' : ''
                  }`}
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/cccccc/333333?text=Error"; }}
                />

                {/* Back of the card (question mark/icon) */}
                <div
                  className={`absolute w-full h-full rounded-lg flex items-center justify-center bg-gradient-to-br from-pink-300 to-pink-500
                              ${card.isFlipped || card.isMatched ? '' : 'rotate-y-0'}`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0V6zM13.5 15a.75.75 0 00-1.5 0v.007h1.5V15z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={resetGame}
          className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out"
        >
          Reset Game
        </button>
      </div>

      {/* Win Message Modal */}
      {showWinMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-sm w-full relative">
            <span
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer text-2xl"
              onClick={() => setShowWinMessage(false)}
            >
              &times;
            </span>
            <div className="text-red-500 text-6xl mb-4">❤️</div>
            <h2 className="text-3xl font-bold text-pink-700 mb-2">
              អ្នកពូកែណាស់!
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              សូមអបអរសាទរ!
            </p>
            <button
              onClick={() => {
                setShowWinMessage(false);
                resetGame();
              }}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out"
            >
              បិទ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


// Main App component
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('loading'); // 'loading', 'home', 'memories', 'calendar', 'puzzle'

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setCurrentPage('home'); // Automatically go to home after loading
  };

  const handleNavigate = (path) => {
    setCurrentPage(path);
  };

  return (
    <>
      {/* Tailwind CSS import */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Google Font Import (Inter) */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      {isLoading && currentPage === 'loading' ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : currentPage === 'home' ? (
        <HomeMenu onNavigate={handleNavigate} />
      ) : currentPage === 'memories' ? (
        <MemoriesPage onBack={() => setCurrentPage('home')} />
      ) : currentPage === 'calendar' ? (
        <CalendarPage onBack={() => setCurrentPage('home')} />
      ) : currentPage === 'puzzle' ? (
        <PuzzleGamePage onBack={() => setCurrentPage('home')} />
      ) : (
        // Fallback for unknown pages (can be a 404 page)
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <p className="text-xl text-gray-700">Page Not Found!</p>
        </div>
      )}
    </>
  );
};

export default App;
