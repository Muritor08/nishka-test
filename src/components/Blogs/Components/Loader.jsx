import React from 'react';

const Loader = () => (
  <div className="tw-text-center">
    <button
      type="button"
      className="tw-inline-flex tw-items-center tw-px-4 tw-py-2 tw-border tw-border-transparent tw-text-base tw-leading-6 tw-font-medium tw-rounded-md tw-text-white tw-bg-rose-600 hover:tw-bg-rose-500 focus:tw-border-rose-700 active:tw-bg-rose-700 tw-transition tw-ease-in-out tw-duration-150
      tw-cursor-not-allowed"
      disabled=""
    >
      <svg className="tw-animate-spin tw--ml-1 tw-mr-3 tw-h-5 tw-w-5 tw-text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="tw-opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="tw-opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
      Loading...
    </button>
  </div>
);

export default Loader;
