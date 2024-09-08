import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-yellow-400 border-dashed rounded-full animate-spin"></div>
        <p className="mt-4 text-yellow-400 text-xl font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
