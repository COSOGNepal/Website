import React, { useEffect } from "react";
import increasedNumber from "./../../utils/increaseNumbers";

const Numbers = () => {
  return (
    <main className="grid grid-cols-1 gap-y-6 md:grid-cols-3 bg-dark-pri py-12 h-fit md:h-64 items-center justify-items-center">
      <div>
        <h2 className="text-white text-6xl text-center font-extrabold">
          {increasedNumber(30)}+
        </h2>
        <p className="text-text-grey-sec text-lg font-normal">
          Open source projects
        </p>
      </div>
      <div>
        <h2 className="text-white text-6xl text-center font-extrabold">10+</h2>
        <p className="text-text-grey-sec text-lg font-normal">
          Community Members{" "}
        </p>
      </div>
      <div>
        <h2 className="text-white text-6xl text-center font-extrabold">10+</h2>
        <p className="text-text-grey-sec text-lg font-normal">
          Social Good Events{" "}
        </p>
      </div>
    </main>
  );
};

export default Numbers;
