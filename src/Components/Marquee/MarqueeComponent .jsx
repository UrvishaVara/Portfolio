import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent = ({ skills, classNames }) => {
  return (
    <div className={`text-2xl font-bold text-white drop-shadow-lg py-3 ${classNames}`}>
      <Marquee speed={100} pauseOnHover className="!space-x-5">
        {
          skills.map((data) => {
            return (
              <div key={data}>{data}</div>
            )
          })
        }
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
