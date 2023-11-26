"use client";
import RouteHeading from "@/components/RouteHeading";
import React from "react";
import { useState } from "react";
import FileInput from "./_components/FileInput";
import InfoBanner from "@/components/InfoBanner";
const Donate = () => {
  const [ShownComponent, setShownComponent] = useState({ shown: "esewa" });
  return (
    <>
      <main className="px-4 md:px-section">
        <RouteHeading Title={"Donations"} Route={"home/donate"} />
        <div className="my-block text-title md:w-8/12 text-faded mx-[0] md:mx-auto mb-block">
          <h2 className="text-title font-semibold pb-2">Why Donate Us?</h2>
          <p className="text-sub-para">
            We are a non profit organization that is working hard to promote
            tech literacy and we don’t have any source of income and that is the
            very reason why we encourage you to donate us.
          </p>
        </div>
        <div className="my-block md:w-8/12 text-faded mx-[0] md:mx-auto mb-block">
          <h2 className="text-title font-semibold pb-2">Donate us via</h2>
          <div className="flex flex-wrap justify-center items-center gap-3 font-light">
            <button
              className={`w-fit h-12 rounded-md min-w-[145px] px-5 py-3 ${
                ShownComponent.shown === "esewa"
                  ? "bg-blue "
                  : "bg-slate-200 text-black"
              } text-white `}
              onClick={() => {
                setShownComponent({ shown: "esewa" });
              }}
            >
              E-Sewa
            </button>
            <button
              className={`w-fit h-12 rounded-md min-w-[145px] overflow-hidden px-5 py-3 ${
                ShownComponent.shown === "fund"
                  ? "bg-blue text-white"
                  : "bg-slate-200 text-black"
              } text-white `}
              onClick={() => {
                setShownComponent({ shown: "fund" });
              }}
            >
              {" "}
              Fund Raise
            </button>
            <button
              className={`w-fit h-12 rounded-md min-w-[145px] px-5 py-3 ${
                ShownComponent.shown === "coffee"
                  ? "bg-blue text-white"
                  : "bg-slate-200 text-black"
              } text-white `}
              onClick={() => {
                setShownComponent({ shown: "coffee" });
              }}
            >
              Buy me a coffee
            </button>
          </div>
          {ShownComponent.shown === "esewa" && <EsewaDonation />}
          {ShownComponent.shown === "fund" && <FundDonation />}
          {ShownComponent.shown === "coffee" && <CoffeeDonation />}
        </div>
      </main>
      <InfoBanner
        leftContent={<InfoBannerLeftContent />}
        rightContent={"Mail Us"}
        CTALink={"mailto:contact@cosognepal.org"}
      />{" "}
    </>
  );
};

export default Donate;
const EsewaDonation = () => {
  const [DonationAmount, setDonationAmount] = useState({ shown: "Rs. 2,000" });
  const [PersonalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  //todo later for backend stuff
  function handleSubmit() {
    console.log("submitted");
  }
  return (
    <section className="mt-block">
      {" "}
      <div className="my-block text-title  text-faded mx-[0] md:mx-auto mb-block">
        <h2 className="text-title font-semibold pb-2">
          How can you donate us?
        </h2>
        <p className="text-sub-para">
          You can donate us by sending your money to the below given qr code via
          any e-banking service. And upload the below mentioned details.
        </p>
      </div>
      <div className="my-block text-title  text-faded mx-[0] md:mx-auto mb-block">
        <h2 className="text-title font-semibold pb-2">
          Thank you for donating to CoSog Nepal.
        </h2>
        <p className="text-sub-para">
          Please fill this below form so, that we can track your donation and
          thank you for your contribution.
        </p>
      </div>
      {/* actually , the element just below should be a form tag (as of semantics) */}
      <div className="my-block text-title  text-faded mx-[0] md:mx-auto mb-block">
        <h2 className="text-title font-semibold pb-2">Donation Information</h2>
        <p className="text-sub-para">Amount</p>
        <input
          className="rounded-sm w-full h-12 py-3 px-2 text-faded text-para border focus:outline "
          type="text"
          placeholder="Ex: 2000"
          value={DonationAmount.shown}
        />
        <div className="flex flex-wrap justify-center items-center gap-3 text-para font-light my-3">
          <button
            className={`w-fit h-12 rounded-md min-w-[145px] px-5 py-3 ${
              DonationAmount.shown === "Rs. 2,000"
                ? "bg-blue text-white"
                : "bg-slate-200 text-black"
            } text-white `}
            onClick={() => {
              setDonationAmount({ shown: "Rs. 2,000" });
            }}
          >
            Rs. 2,000
          </button>
          <button
            className={`w-fit h-12 rounded-md min-w-[145px] overflow-hidden px-5 py-3 ${
              DonationAmount.shown === "Rs. 3,000"
                ? "bg-blue text-white"
                : "bg-slate-200 text-black"
            } text-white `}
            onClick={() => {
              setDonationAmount({ shown: "Rs. 3,000" });
            }}
          >
            {" "}
            Rs. 3,000
          </button>
          <button
            className={`w-fit h-12 rounded-md min-w-[145px] px-5 py-3 ${
              DonationAmount.shown === "Rs. 4,000"
                ? "bg-blue text-white"
                : "bg-slate-200 text-black"
            } text-white `}
            onClick={() => {
              setDonationAmount({ shown: "Rs. 4,000" });
            }}
          >
            Rs. 4,000
          </button>
          <button
            className={`w-fit h-12 rounded-md min-w-[145px] px-5 py-3 ${
              DonationAmount.shown === "Rs. 5,000"
                ? "bg-blue text-white"
                : "bg-slate-200 text-black"
            } text-white `}
            onClick={() => {
              setDonationAmount({ shown: "Rs. 5,000" });
            }}
          >
            Rs. 5,000
          </button>
        </div>
        <p className="text-sub-para mt-5 mb-3">Receipt</p>
        <FileInput />
        {/* -------ended  */}
        <div className="my-block text-title  text-faded mx-[0] md:mx-auto mb-block">
          <h2 className="text-title font-semibold pb-2">
            Personal Information
          </h2>
          <div className="mb-2">
            <p className="text-sub-para">Name</p>
            <input
              className="rounded-sm w-full h-12 py-3 px-2 text-faded text-para border focus:outline "
              type="text"
              placeholder="Harry smith"
              value={PersonalInfo.name}
              onChange={(e) => {
                setPersonalInfo((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
          </div>
          {/* email */}
          <div className="mb-2">
            <p className="text-sub-para">Email</p>
            <input
              className="rounded-sm w-full h-12 py-3 px-2 text-faded text-para border focus:outline "
              type="text"
              placeholder="harry@smith.com"
              value={PersonalInfo.email}
              onChange={(e) => {
                setPersonalInfo((prev) => ({ ...prev, email: e.target.value }));
              }}
            />
          </div>
          <div className="mb-2">
            <p className="text-sub-para">Name</p>
            <input
              className="rounded-sm w-full h-12 py-3 px-2 text-faded text-para border focus:outline "
              type="text"
              placeholder="985587*****"
              value={PersonalInfo.phone}
              onChange={(e) => {
                setPersonalInfo((prev) => ({ ...prev, phone: e.target.value }));
              }}
            />
          </div>
        </div>

        <div className="btn w-full flex justify-center text-para">
          {" "}
          <button
            className={` h-12 rounded-md w-full md:w-[40%] overflow-hidden px-5 py-3 bg-blue text-white hover:bg-primary transition `}
            onClick={() => {
              handleSubmit();
            }}
          >
            {" "}
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};
const FundDonation = () => {
  return <section>this is fund donation section</section>;
};
const CoffeeDonation = () => {
  return <section>this is coffee donation section</section>;
};
const InfoBannerLeftContent = () => {
  return (
    <div>
      <div className="pb-2">
        <h2 className="text-sub-title font-semibold ">
          Experiencing any problems while donating?
        </h2>
      </div>
      <div className="pb-4 flex flex-col gap-0 font-para">
        <p className="text-sub-para p-0 m-0 ">Contact us using</p>
        <p className="text-sub-para ">
          Phone <span className="font-semibold">+977 9867676676</span>
        </p>
        <p className="text-sub-para p-0 m-0 ">
          Email <span className="font-semibold">contact@cosognepal.org</span>
        </p>
      </div>

      <p className="text-info text-white-light ">
        We are available 24/7 every single day of the week.{" "}
      </p>
    </div>
  );
};
