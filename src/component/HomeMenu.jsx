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
