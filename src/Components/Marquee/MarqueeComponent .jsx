import React from "react";

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-900 py-3">
      <div className="flex space-x-10 animate-marquee text-white text-xl font-semibold">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>Bootstrap</span>
        <span>React.js</span>
        <span>Tailwind CSS</span>
      </div>
    </div>
  );
};

export default Marquee;
