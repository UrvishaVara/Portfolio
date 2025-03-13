import React from "react";

const MarqueeComponent = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-900 py-4">
      <div className="animate-marquee flex space-x-10">
        <span className="text-gray-400 text-xl">Amazon</span>
        <span className="text-gray-400 text-xl">Walmart</span>
        <span className="text-gray-400 text-xl">LinkedIn</span>
        <span className="text-gray-400 text-xl">Google</span>
        <span className="text-gray-400 text-xl">Slack</span>
      </div>
    </div>
  );
};

export default MarqueeComponent;
