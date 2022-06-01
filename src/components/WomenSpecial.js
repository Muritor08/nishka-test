import React from "react";

const WomenSpecial = () => {
  return (
    <>
      <div className="tw-text-5xl md:tw-text-7xl tw-text-pink-600 tw-font-semibold tw-mb-12 md:tw-mb-6 lg:tw-mb-14 lg:tw-mt-20 md:tw-mt-0">
        Women Special
      </div>
      <div className="tw-flex tw-relative tw-w-full">
        <div className="tw-absolute tw-z-10 tw-ml-16 tw-mt-10 lg:tw-w-96 lg:tw-h-96 xl:tw-w-auto xl:tw-h-auto tw-hidden lg:tw-block">
          <img src="WomenMain.png" alt="women" className="tw-w-full tw-h-full"/>
        </div>
        <div className="tw-flex tw-flex-col tw-w-full">
          <div className="tw-flex tw-flex-row-reverse tw-items-center md:tw-p-3">
            <div className="lg:tw-h-48 lg:tw-w-48 md:tw-w-56 md:tw-h-44 tw-w-28 xl:tw-mr-28 lg:tw-mr-0 md:tw-mr-14">
              <img
                src="Women1.png"
                alt="women1"
                className="tw-h-full tw-w-full"
              />
            </div>
            <div className="tw-flex tw-flex-col lg:tw-w-1/3 md:tw-ml-14 lg:tw-ml-0 tw-w-3/4 tw-pl-3 tw-pb-4">
              <div className="tw-text-womenpink-600 tw-font-semibold tw-text-lg md:tw-text-2xl tw-w-full md:tw-w-auto tw-text-left tw-mb-1.5 md:tw-mb-5">
                Enhance your financial literacy
              </div>
              <div className="tw-text-pink-600 md:tw-text-xl tw-text-left tw-w-full lg:tw-w-5/6">
                Your Gateway to Comprehensive learning resources on various
                financial products.
              </div>
            </div>
          </div>
          <div className="tw-flex tw-flex-row-reverse tw-items-center md:tw-p-3 tw-bg-womenpink-50">
            <div className="tw-flex tw-flex-col lg:tw-w-1/3 xl:tw-mr-10 lg:tw-ml-0 md:tw-ml-16 tw-w-3/4 md:tw-w-auto tw-pr-3 tw-py-4">
              <div className="tw-text-womenpink-600 tw-font-semibold tw-text-lg md:tw-text-2xl tw-text-left tw-mb-1.5 md:tw-mb-5 tw-w-full md:tw-w-auto">
                Invest and Grow with Us
              </div>
              <div className="tw-text-pink-600 md:tw-text-xl tw-text-left lg:tw-w-5/6 tw-w-full">
                Use our best-in-class platform to buy financial products that
                perfectly suit your requirements.
              </div>
            </div>
            <div className="lg:tw-h-48 lg:tw-w-48 md:tw-w-80 md:tw-h-44 tw-w-28 xl:tw-mr-20 lg:tw-mr-0 md:tw-ml-10">
              <img
                src="Women2.png"
                alt="women1"
                className="tw-h-full tw-w-full"
              />
            </div>
          </div>
          <div className="tw-flex tw-flex-row-reverse tw-items-center md:tw-p-3">
          <div className="lg:tw-h-48 lg:tw-w-48 md:tw-w-56 md:tw-h-44 tw-w-32 xl:tw-mr-28 lg:tw-mr-0 md:tw-mr-14">
              <img
                src="Women3.png"
                alt="women1"
                className="tw-h-full tw-w-full"
              />
            </div>
            <div className="tw-flex tw-flex-col lg:tw-w-1/3 md:tw-ml-14 lg:tw-ml-0 tw-w-5/6 tw-pl-3 tw-py-4">
              <div className="tw-text-womenpink-600 tw-font-semibold tw-text-lg md:tw-text-2xl tw-w-full md:tw-w-auto tw-text-left tw-mb-1.5 md:tw-mb-5">
                Achieve your financial freedom
              </div>
              <div className="tw-text-pink-600 md:tw-text-xl tw-text-left tw-w-full lg:tw-w-5/6">
                Invest using our experience and expertise. Partner with us to
                achieve your financial independence
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tw-bg-womenpink-50 tw-flex tw-flex-col">
        <div className="tw-text-womenpink-600 tw-text-lg md:tw-text-2xl tw-p-8 tw-text-justify md:tw-p-14">
          Nishkaera offers specialised financial services to working women with
          the aim to enable them to achieve their financial freedom through mix
          of learning, seasoned advice and a platform to buy women-oriented
          financial products.
        </div>
        <a href='/WomenSpecialHome' className="tw-mb-12">
            <button className="tw-bg-womenpink-50 tw-border-4 tw-border-womenpink-500 tw-text-womenpink-500 tw-rounded-full tw-p-2 md:tw-p-3 tw-px-3 md:tw-px-5 tw-text-xl md:tw-text-2xl tw-font-semibold">Read More</button>
        </a>
      </div>
    </>
  );
};

export default WomenSpecial;