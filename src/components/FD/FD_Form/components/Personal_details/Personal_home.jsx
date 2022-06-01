import React from "react";
import { Form } from "formik";
import Personal_details from "./Personal_form";

//image
import step3 from "../../assets/step3.png";
import step3mob from "../../assets/step3mob.png";
import pd from "../../assets/pd.png";

const Personal_home = () => {
  return (
    <>
      <div className="tw-hidden md:tw-mob tw-w-full tw-px-8 tw-pt-8">
        <img src={step3} className="tw-mx-auto tw-w-full" />
      </div>
      <div className="tw-block md:tw-hidden tw-w-full tw-px-2 tw-pt-8">
        <img src={step3mob} className="tw-mx-auto tw-w-full" />
      </div>

      <div className="tw-border-nishblue-100 tw-p-4 md:tw-p-8">
        <div className=" tw-h-auto tw-border-2 tw-border-solid tw-rounded-2xl tw-border-nishblue-100">
          <h1 className="tw-font-semibold tw-text-left tw-text-2xl md:tw-text-5xl tw-m-4 tw-ml-10">
            Personal Details
          </h1>

          <div className="tw-flex tw-w-full">
            <div className="lg:tw-w-1/2">
              <Personal_details />
            </div>

            <div className="tw-hidden lg:tw-block tw-w-1/3 lg:tw-w-2/5 xl:tw-w-1/2">
              <img
                src={pd}
                className="tw-w-full tw-hidden lg:tw-block tw-m-auto tw-my-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal_home;
