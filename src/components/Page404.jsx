const Page404 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="text-center">
        {/* Animated 404 text */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-800 animate-bounce">
            4<span className="text-indigo-600">0</span>4
          </h1>
        </div>
        
        {/* Error message */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Oops! Page not found
        </h2>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for seems to have wandered off into the digital void. 
          Let's get you back on track.
        </p>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md"
          >
            Go Back
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
          >
            Go Home
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-12 text-gray-400">
          <svg
            className="w-24 h-24 mx-auto opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Page404;