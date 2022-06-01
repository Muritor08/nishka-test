import React from 'react';
// import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="tw-text-center tw-mt-20 tw-mb-8 tw-p-12 tw-relative tw-rounded-lg tw-bg-black tw-bg-opacity-30">
    <div className="tw-absolute tw-left-0 tw-right-0 tw--top-14">
      <img
        // unoptimized
        // loader={grpahCMSImageLoader}
        alt={author.name}
        height="100px"
        width="100px"
        className="tw-align-middle tw-rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="tw-text-white tw-mt-4 tw-mb-4 tw-text-xl tw-font-bold">{author.name}</h3>
    <p className="tw-text-white tw-text-ls">{author.bio}</p>
  </div>
);

export default Author;
