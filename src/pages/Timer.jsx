import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const startTimer = () => {
    if (time > 0) {
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(10);
  };

  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center items-center bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-5">Oddiy Taymer</h1>
      <div className="text-5xl font-bold mb-5">
        {time > 0 ? `${time}s` : 'Vaqt tugadi!'}
      </div>
      <div className="flex space-x-3">
        <button
          onClick={startTimer}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Start
        </button>
        <button
          onClick={pauseTimer}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Pause
        </button>
        <button
          onClick={resetTimer}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;