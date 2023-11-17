import React from "react";

const Goals = () => {
  return (
    <main className="px-4 md:px-16 my-20">
      <h2 className={"text-xl md:text-3xl text-faded font-normal "}>
        Our Main Goals{" "}
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 w-11/12 gap-3 py-8 px-2 md:px-24">
        <div className="col-span-1 bg-gray-bg">
          <h2>heading</h2>
          <p>description</p>
        </div>
      </section>
    </main>
  );
};

export default Goals;
