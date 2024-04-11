import React from "react";

const RouteHeading = ({ Title, Route }: { Title: String; Route: String }) => {
  return (
    <header className="left-28 top-5">
      <h1 className="my-0 py-0 text-sub-title sm:text-title md:text-heading font-bold">
        {Title}
      </h1>
      <p className="text-sub-para text-faded">{Route}</p>
    </header>
  );
};

export default RouteHeading;
