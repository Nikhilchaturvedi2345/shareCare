import React, { useState, useEffect } from 'react';

const ProgressBar = ({ progress }) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProgress((prev) => (prev < progress ? prev + 1 : progress));
    }, 20); // Increment the progress smoothly

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="w-full h-6 bg-gray-700 rounded-lg overflow-hidden fixed bottom-12">
      <div
        className="h-full bg-cyan-400 transition-all duration-500"
        style={{ width: `${currentProgress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
