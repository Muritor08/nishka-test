import React from "react";

//image
import Person from "../../assets/image.png";
import step1 from "../../assets/step1.png";
import step1mob from "../../assets/step1mob.png";
// import CustomizedSteppers from "../Steps/steps";

//components
import Tabs from "./tab";

const Mob_ver = () => {
  return (
    <>
      <div className="tw-hidden md:tw-block tw-w-full tw-px-8 tw-pt-8">
        <img src={step1} className="tw-mx-auto tw-w-full" />
      </div>

      <div className="tw-block md:tw-hidden tw-w-full tw-px-2 tw-pt-8">
        <img src={step1mob} className="tw-mx-auto tw-w-full" />
      </div>

      <div className="tw-border-nishblue-100 tw-p-4 md:tw-p-8">
        <div className=" tw-h-auto tw-border-solid tw-rounded-2xl tw-border-nishblue-100">
          <h1 className="tw-font-semibold lg:tw-text-5xl tw-text-2xl md:tw-text-3xl tw-m-4 tw-text-left md:tw-ml-10">
            <span className="tw-text-nishblue-400 tw-font-medium lg:tw-text-4xl tw-text-2xl">
              Start Saving with
            </span>{" "}
            Fixed Deposit in Few Steps
          </h1>

          <p className="tw-text-yellow-400 tw-ml-4 tw-text-left md:tw-ml-10 tw-text-md tw-font-medium">
            Enter your mobile number, date of birth and request OTP to continue
          </p>

          <div className="tw-flex tw-w-full">
            <div className="lg:tw-w-1/2 tw-w-full tw-pr-6 md:tw-pr-12 lg:tw-pr-0">
              <Tabs />
            </div>

            <div className="xl:tw-w-2/5 xl:tw-mx-auto tw-hidden lg:tw-block">
              <img src={Person} className="xl:tw-w-full tw-w-3/4 tw-mx-auto tw-my-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mob_ver;
