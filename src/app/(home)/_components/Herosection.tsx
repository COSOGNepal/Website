import Image from "next/image";
import React from "react";

const Herosection = () => {
  return (
    <section className=" w-screen min-h-screen">
      <main className="relative -z-10 w-screen min-h-screen ">
        <div className="item1 absolute">
          <div className="relative w-40 h-52  md:w-56 md:h-64 ">
            <Image src={"/assets/bgShape1.svg"} fill alt={"background"} />
          </div>
        </div>
        <div className="item2 absolute bottom-0 left-1/2 -translate-x-1/2">
          <div className="relative w-52 h-64  md:w-72 md:h-96 ">
            <Image src={"/assets/bgShape2.svg"} fill alt={"background"} />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Herosection;
