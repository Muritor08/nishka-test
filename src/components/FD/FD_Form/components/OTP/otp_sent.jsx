import React from "react";

//image
import otp from "../../assets/otp.png";
import step1 from "../../assets/step1.png";

//components
import Otp_code from "./otp";

const Otp_ver = () => {
  return (
    <>
      <div className="tw-w-full tw-px-8 tw-pt-8">
        <img src={step1} className="tw-mx-auto tw-w-full" />
      </div>

      <div className="tw-border-nishblue-100 tw-p-4 md:tw-p-8">
        <div className=" tw-h-auto tw-border-2 tw-border-solid tw-rounded-2xl tw-border-nishblue-100">
          <h1 className="tw-font-semibold tw-text-left md:tw-text-5xl tw-text-4xl tw-m-4 md:tw-ml-10">
            OTP Sent
          </h1>

          <p className="tw-text-yellow-400 tw-text-left md:tw-ml-10 tw-ml-4 tw-text-md tw-font-medium">
            Please enter the OTP received on your mobile.
          </p>

          <div className="tw-flex tw-w-full">
            <div className="xl:tw-w-1/2 tw-w-full">
              <Otp_code />
            </div>

            <div className="xl:tw-w-2/5 xl:tw-mx-auto tw-hidden lg:tw-block">
              <img src={otp} className="xl:tw-w-full tw-w-full tw-mx-auto tw-my-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp_ver;
