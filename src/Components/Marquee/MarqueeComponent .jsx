import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent = ({ skills, classNames }) => {
  return (
    <div className={`text-2xl font-normal text-white  py-3 ${classNames}`}>
      <Marquee speed={100} pauseOnHover className="!space-x-5 drop-shadow-lg">
        {
          skills.map((data) => {
            return (
              <div key={data} className="text-shadow">{data}</div>
            )
          })
        }
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
