import React from "react";

//image
import sal_pl from "../../assets/sal_pl.png";
import step1 from "../../assets/step1_sal.png";
import step1mob from "../../assets/sal_step1mob.png";

//components
import Salaried_PersonalFields from "./Salaried_PersonalFields";

const Salaried_Personal = () => {
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
          <h1 className="tw-font-semibold lg:tw-text-5xl tw-text-2xl md:tw-text-3xl tw-m-4 tw-mb-4 md:tw-mb-14 tw-text-left md:tw-ml-10">
            Your Personal Loan is Few Steps Away
          </h1>
          <div className="tw-flex tw--mt-8 tw-w-full">
            <div className="lg:tw-w-1/2 tw-w-full tw-pr-6 md:tw-pr-12 lg:tw-pr-0">
              <div className="tw-w-full md:tw-w-4/5 lg:tw-w-2/3"><Salaried_PersonalFields /></div>
            </div>

            <div className="tw-hidden lg:tw-block tw-w-1/3 lg:tw-w-2/5 xl:tw-w-2/5">
              <img
                src={sal_pl}
                className="tw-w-full tw-hidden lg:tw-block tw-m-auto tw-my-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Salaried_Personal;
