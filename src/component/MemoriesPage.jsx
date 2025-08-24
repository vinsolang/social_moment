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