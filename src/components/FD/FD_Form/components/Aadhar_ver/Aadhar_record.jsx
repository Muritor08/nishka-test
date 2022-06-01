import React from "react";

//image
import aadharRecord from "../../assets/aadhar_record.png";
import step2 from "../../assets/step2.png";

//components
import Aadhar_recordFields from "./Aadhar_recordFields";

const Aadhar_record = () => {
  return (
    <>
      <div className="tw-w-full tw-px-8 tw-pt-8">
        <img src={step2} className="tw-mx-auto tw-w-full" />
      </div>

      <div className="tw-border-nishblue-100 tw-p-4 md:tw-p-4">
        <div className=" tw-h-auto tw-border-2 tw-border-solid tw-rounded-2xl tw-border-nishblue-100">
          <h1 className="tw-font-semibold tw-text-3xl tw-text-left lg:tw-text-5xl tw-m-4 md:tw-ml-10">
            Customer details as per Aadhaar Records
          </h1>

          <div className="tw-flex tw-w-full">

            <div className="xl:tw-w-1/2">
              <Aadhar_recordFields />
            </div>

            <div className="tw-hidden xl:tw-block tw-w-1/2 tw-my-auto">
              <img src={aadharRecord} className="tw-m-auto tw-my-auto" />
            </div>

          </div>
          
        </div>
      </div>
    </>
  );
};

export default Aadhar_record;
