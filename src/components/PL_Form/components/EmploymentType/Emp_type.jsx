import React from "react";
import { AiFillGift } from "react-icons/ai";

//image
import pd from "../../assets/pd.png";

//components
import Tabs from "./Tab";

const Emp_type = () => {
  return (
    <>
      <div className="tw-m-4 md:tw-m-8 tw--mb-0.5 tw-border-black tw-shadow-3xl tw-rounded-2xl">
        <div className="tw-border-nishblue-100 md:tw-p-2">
          <div className="tw-h-auto tw-rounded-2xl tw-border-solid tw-border-nishblue-100">
            <div className="tw-flex tw-flex-col md:tw-flex-row tw-p-3 tw-items-center tw-pt-6 tw-justify-between tw-px-10">
              <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-1.5 lg:tw-gap-3 tw-items-center tw-py-auto">
              <span className="tw-text-green-400 lg:tw-w-10 lg:tw-h-10 tw-w-8 tw-pb-3"><AiFillGift className="tw-h-full tw-w-full"/></span>
                <p className="lg:tw-text-lg tw-font-semibold">
                  EXCLUSIVE OFFER:{" "}
                  <span className="tw-font-normal lg:tw-pl-2 tw-text-sm lg:tw-text-md">
                    Wallets Protect benefits worth Rs. 999 for 1 years{" "}
                  </span>
                </p>
              </div>
              <div className="tw-text-lg tw-font-semibold tw-text-nishyellow-400">
                <p>VIEW DETAILS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tw-border-nishblue-100 tw-p-4 md:tw-p-8">
        <div className=" tw-h-auto tw-border-solid tw-rounded-2xl tw-border-nishblue-100">
          <h1 className="tw-font-semibold lg:tw-text-md tw-text-xs md:tw-text-sm tw-m-4 tw--mb-4 tw-text-left md:tw-ml-10">
            Hi There,
          </h1>
          <p className="lg:tw-text-md tw-text-xs md:tw-text-sm tw-m-4 tw-mb-6 tw-text-left md:tw-ml-10">
            Let's get started with your basic information
          </p>

          <p className="tw-text-nishblue-400 tw-ml-4 tw-text-left md:tw-ml-10 tw-text-md">
            Employment Type
          </p>

          <div className="tw-flex tw--mt-8 tw-w-full">
            <div className="lg:tw-w-1/2 tw-w-full tw-pr-6 md:tw-pr-12 lg:tw-pr-0">
              <Tabs />
            </div>

            <div className="tw-hidden lg:tw-block tw-w-1/3 lg:tw-w-2/5 xl:tw-w-2/5">
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

export default Emp_type;
