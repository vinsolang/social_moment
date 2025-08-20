// App.jsx
import React, { useState, useEffect } from 'react';
import FloatingHearts from './FloatingHearts';
import Image1 from './assets/image/1.webp';
import Image2 from './assets/image/2.jpg';
import Image3 from './assets/image/3.jpg';
import Image4 from './assets/image/4.jpg';
import Image5 from './assets/image/5.jpg';
import Image6 from './assets/image/6.webp';



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
       <FloatingHearts /> {/* ❤️ background hearts */}
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
       <FloatingHearts /> {/* ❤️ background hearts */}
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
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Start touch
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Moving finger
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // End touch → check direction
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // swipe left → next
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
    if (touchStart - touchEnd < -75) {
      // swipe right → previous
      setCurrentIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fddde6] to-[#fce4ec] flex flex-col items-center p-4 relative">
       <FloatingHearts /> {/* ❤️ background hearts */}
      {/* Back Button */}
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

      <h1 className="text-4xl font-extrabold text-pink-700 mt-16 mb-6">
        Our Sweet Moments
      </h1>

      {/* Image Viewer */}
      <div
        className="relative w-[320px] h-[480px] sm:w-[380px] sm:h-[540px] md:w-[420px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-white"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[currentIndex]}
          alt={`memory-${currentIndex}`}
          className="w-full h-full object-cover"
        />
        {/* Index / caption */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Manual Buttons */}
      <div className="flex gap-6 mt-6">
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? images.length - 1 : prev - 1
            )
          }
          className="px-4 py-2 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600"
        >
           Prev
        </button>
        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev + 1) % images.length)
          }
          className="px-4 py-2 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600"
        >
          Next 
        </button>
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
          onError={(e) => { e.target.onerror = null; e.target.src = Image2; }}
        />
      </div>

      {/* Countdown Display */}
      {/* Adjusted classes for responsiveness */}
      <div className="flex justify-center items-center space-x-2 sm:space-x-4 mb-8 text-center flex-wrap">
        <div className="flex flex-col items-center">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700">{formatTime(timeLapsed.years)}</span>
          <span className="text-xs sm:text-sm text-gray-600">Year</span>
        </div>
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700">.</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700">{formatTime(timeLapsed.months)}</span>
          <span className="text-xs sm:text-sm text-gray-600">Month</span>
        </div>
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700">.</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700">{formatTime(timeLapsed.days)}</span>
          <span className="text-xs sm:text-sm text-gray-600">Days</span>
        </div>
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700">.</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700">{formatTime(timeLapsed.hours)}</span>
          <span className="text-xs sm:text-sm text-gray-600">Hours</span>
        </div>
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700">.</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700">{formatTime(timeLapsed.minutes)}</span>
          <span className="text-xs sm:text-sm text-gray-600">Minutes</span>
        </div>
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700">.</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700">{formatTime(timeLapsed.seconds)}</span>
          <span className="text-xs sm:text-sm text-gray-600">Seconds</span>
        </div>
      </div>

      <div className="text-center">
        <p className="text-lg text-gray-700 mb-2">
          យើងបានស្រលាញ់គ្នាអស់រយៈពេល...
        </p>
        <p className="text-2xl font-bold text-red-500">
          ❤️ ស្រលាញ់អ្នក ៣០០០ ឆ្នាំ MY LOVE❤️
        </p>
      </div>
    </div>
  );
};


// PuzzleGamePage Component
const PuzzleGamePage = ({ onBack }) => {
  const initialImages = [
    { src: Image1, id: 1 },
    { src: Image2, id: 2 },
    { src: Image3, id: 3 },
    { src: Image4, id: 4 },
    { src: Image5, id: 5 },
    { src: Image6, id: 6 },
  ];

  // create duplicated cards + shuffle
  const initializeCards = () => {
    const duplicatedImages = [...initialImages, ...initialImages];
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
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [showWinMessage, setShowWinMessage] = useState(false);
  const [canFlip, setCanFlip] = useState(true);

  // win check
  useEffect(() => {
    if (matchedPairs === initialImages.length && initialImages.length > 0) {
      setTimeout(() => setShowWinMessage(true), 500);
    }
  }, [matchedPairs, initialImages.length]);

  const handleCardClick = (clickedIndex) => {
    if (!canFlip || cards[clickedIndex].isFlipped || cards[clickedIndex].isMatched) return;

    setCards((prev) =>
      prev.map((card, idx) =>
        idx === clickedIndex ? { ...card, isFlipped: true } : card
      )
    );
    setFlippedCards((prev) => [...prev, clickedIndex]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setCanFlip(false);
      const [i1, i2] = flippedCards;
      const c1 = cards[i1];
      const c2 = cards[i2];

      if (c1.id === c2.id) {
        // match
        setMatchedPairs((prev) => prev + 1);
        setCards((prev) =>
          prev.map((card, idx) =>
            idx === i1 || idx === i2 ? { ...card, isMatched: true } : card
          )
        );
        setFlippedCards([]);
        setCanFlip(true);
      } else {
        // no match → flip back
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card, idx) =>
              idx === i1 || idx === i2 ? { ...card, isFlipped: false } : card
            )
          );
          setFlippedCards([]);
          setCanFlip(true);
        }, 1000);
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
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-pink-100 to-pink-200 p-4 relative">
      <FloatingHearts /> {/* ❤️ background hearts */}
      {/* Back btn */}
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

      <div className="bg-white rounded-3xl shadow-xl p-6 mt-20 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-pink-700 mb-2">អនុស្សាវរីយ៍</h1>
        <p className="text-gray-600 mb-6">ផ្គូផ្គងរូបភាពដូចគ្នា</p>

        <div className="grid grid-cols-4 gap-3 justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className="w-20 h-20 sm:w-24 sm:h-24 cursor-pointer relative"
            >
              {card.isFlipped || card.isMatched ? (
                <img
                  src={card.src}
                  alt={`card-${card.id}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg shadow-md">
                  <span className="text-white text-2xl">?</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={resetGame}
          className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition"
        >
          Reset Game
        </button>
      </div>

      {/* Win Modal */}
      {showWinMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center max-w-sm w-full">
            <div className="text-red-500 text-6xl mb-4">❤️</div>
            <h2 className="text-2xl font-bold text-pink-700 mb-2">អ្នកពូកែណាស់!</h2>
            <p className="text-gray-600 mb-6">សូមអបអរសាទរ!</p>
            <button
              onClick={() => {
                setShowWinMessage(false);
                resetGame();
              }}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition"
            >
              បិទ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


// MessagesPage Component
const MessagesPage = ({ onBack }) => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleEnvelopeClick = () => {
    setIsEnvelopeOpen(!isEnvelopeOpen);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#fddde6] to-[#fce4ec] font-siemreap p-4 relative overflow-hidden">
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
      {/* Styles for heart animation (repeated for self-contained components) */}
      <style>
        {`
        @keyframes heart-float {
          0% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.5; }
          100% { transform: translateY(0) scale(1); opacity: 0.3; }
        }
        `}
      </style>

      <div className="absolute top-8 left-8 z-20"> {/* Increased z-index for back button */}
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

      <div
        className={`relative w-72 h-48 sm:w-96 sm:h-64 cursor-pointer transition-transform duration-700 ease-in-out z-10`}
        onClick={handleEnvelopeClick}
        style={{ transformOrigin: 'top center' }}
      >
        {/* Envelope Base (Bottom Flap) */}
        <div className="absolute inset-0 bg-pink-500 rounded-lg shadow-xl"
             style={{
               clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // Full rectangle for the base
             }}>
        </div>

        {/* Envelope Side Flaps */}
        {/* Left Flap */}
        <div className={`absolute w-1/2 h-full bg-pink-400 origin-bottom-right transition-transform duration-700 ease-in-out`}
             style={{
               left: '0%',
               clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)', // Bottom-left triangle
               transform: isEnvelopeOpen ? 'rotateX(0deg)' : 'rotateY(0deg)', // No rotation on these
             }}>
        </div>
        {/* Right Flap */}
        <div className={`absolute w-1/2 h-full bg-pink-400 origin-bottom-left transition-transform duration-700 ease-in-out`}
             style={{
               right: '0%',
               clipPath: 'polygon(0% 0, 0% 100%, 100% 100%)', // Bottom-right triangle
               transform: isEnvelopeOpen ? 'rotateX(0deg)' : 'rotateY(0deg)', // No rotation on these
             }}>
        </div>

        {/* Envelope Top Flap */}
        <div className={`absolute w-full h-1/2 bg-pink-500 rounded-t-lg origin-bottom transition-transform duration-700 ease-in-out
                       ${isEnvelopeOpen ? 'rotate-x-180' : 'rotate-x-0'}`}
             style={{
               top: '0%',
               zIndex: 2,
               clipPath: 'polygon(0 0, 50% 100%, 100% 0)', // Triangle flap
             }}>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-red-500 text-3xl">❤️</div>
        </div>

        {/* Message Content (slides up when opened) */}
        <div
          className={`absolute w-full h-full bg-white rounded-lg shadow-inner p-4 text-center overflow-hidden
                       transition-all duration-700 ease-in-out z-10`}
          style={{
            transform: isEnvelopeOpen ? 'translateY(-25%)' : 'translateY(100%)', // Slide up or down
            opacity: isEnvelopeOpen ? 1 : 0,
            pointerEvents: isEnvelopeOpen ? 'auto' : 'none',
            top: '0%',
            height: '125%', // Make it taller so it can slide up
          }}
        >
          <div className="flex flex-col items-center justify-center h-full p-2 rounded-lg"
               style={{ backgroundColor: 'rgb(255, 240, 245, 0.7)' }}>
            <p className="font-bold text-pink-700 text-2xl mb-2">Dear labubook,</p>
            <p className="text-gray-800 text-md sm:text-lg">
              យើងនៅជាមួយគ្នាយូរណាស់មកហើយ អរគុណដែលអ្នកមិនដែលបោះបង់ខ្ញុំ។ យើងបានឆ្លងកាត់រឿងល្អៗ និងអាក្រក់ជាច្រើនជាមួយគ្នា។ សង្ឃឹមថាអ្នកនៅជាមួយខ្ញុំគ្រប់ពេលវេលា មិនថាខ្ញុំទៅទីណានោះទេ។ ខ្ញុំដឹងថាពេលខ្លះខ្ញុំជាមនុស្សរឹងរូស តែខ្ញុំមិនចង់ឲ្យអ្នកឈឺចាប់ទេ។ ខ្ញុំដឹងថាខ្ញុំស្រលាញ់អ្នកប៉ុណ្ណា មិនថាខ្ញុំនិយាយអ្វីក៏ដោយ តែខ្ញុំស្រលាញ់អ្នករហូត។
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


// Main App component
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('loading'); // 'loading', 'home', 'memories', 'calendar', 'puzzle', 'messages'

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
      ) : currentPage === 'messages' ? (
        <MessagesPage onBack={() => setCurrentPage('home')} />
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
