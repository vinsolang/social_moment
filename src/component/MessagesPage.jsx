// MessagesPage Component
const MessagesPage = ({ onBack }) => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleEnvelopeClick = () => {
    setIsEnvelopeOpen(!isEnvelopeOpen);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#fddde6] to-[#fce4ec] font-inter p-4 relative overflow-hidden">
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