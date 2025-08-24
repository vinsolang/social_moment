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
          ❤️ ស្រលាញ់អ្នក ៣០០០ ណា ❤️
        </p>
      </div>
    </div>
  );
};