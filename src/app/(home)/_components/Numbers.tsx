import Image from "next/image";

const Numbers = () => {
  return (
    <main className="h-72 text-white bg-primary bg-[url('/assets/bgPattern.svg')] bg-cover bg-blend-multiply my-24 grid grid-cols-2 sm:grid-cols-4 justify-center place-items-center">
      <div className="flex flex-col items-center">
        <div className="w-12 sm:w-20 aspect-square relative">
          <Image src={"/assets/School_logo.svg"} fill alt="school" />
        </div>
        <h2 className="text-center text-md sm:text-xl font-light">
          {" "}
          Schools Reached
        </h2>
        <h1 className="text-center text-xl sm:text-3xl font-bold">20+</h1>
      </div>
      {/* next one */}
      <div className="flex flex-col items-center">
        <div className="w-12 sm:w-20 aspect-square relative">
          <Image src={"/assets/District_logo.svg"} fill alt="school" />
        </div>
        <h2 className="text-center text-md sm:text-xl font-light">
          {" "}
          Districts Reached
        </h2>
        <h1 className="text-center text-xl sm:text-3xl font-bold">50+</h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-12 sm:w-20 aspect-square relative">
          <Image src={"/assets/Events_logo.svg"} fill alt="events" />
        </div>
        <h2 className="text-center text-md sm:text-xl font-light">
          {" "}
          Events Organized
        </h2>
        <h1 className="text-center text-xl sm:text-3xl font-bold">15+</h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-12 sm:w-20 aspect-square relative">
          <Image src={"/assets/Students_logo.svg"} fill alt="school" />
        </div>
        <h2 className="text-center text-md sm:text-xl font-light">
          {" "}
          Students Impacted
        </h2>
        <h1 className="text-center text-xl sm:text-3xl font-bold">5000+</h1>
      </div>
    </main>
  );
};

export default Numbers;
