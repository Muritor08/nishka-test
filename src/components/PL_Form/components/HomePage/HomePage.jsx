import React from "react";

//image
import Person from "../../assets/image.png";

//components
import Home_fields from "./Home_fields";

const HomePage = () => {
  return (
    <>
      <div className="tw-border-nishblue-100 tw-p-4 md:tw-p-8">
        <div className=" tw-h-auto tw-border-solid tw-rounded-2xl tw-border-nishblue-100">
          <h1 className="tw-font-semibold lg:tw-text-5xl tw-text-2xl md:tw-text-3xl tw-m-4 tw-text-left md:tw-ml-10">
            <span className="tw-text-nishblue-400 tw-font-medium lg:tw-text-4xl tw-text-2xl">
              Your Personal Loan is Few Steps Away
            </span>{" "}
          </h1>

          <p className="tw-text-yellow-400 tw-ml-4 tw-text-left md:tw-ml-10 tw-text-md tw-font-medium">
            Please fill in your details to check Personal Loan Offer{" "}
          </p>

          <div className="tw-flex tw-w-full">
            <div className="lg:tw-w-1/2 tw-w-full tw-pr-6 md:tw-pr-12 lg:tw-pr-0">
              <Home_fields />
            </div>

            <div className="xl:tw-w-2/5 xl:tw-mx-auto tw-hidden lg:tw-block">
              <img
                src={Person}
                className="xl:tw-w-full tw-w-3/4 tw-mx-auto tw-my-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
