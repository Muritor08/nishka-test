import React from 'react';
import moment from 'moment';

import {Link} from 'react-router-dom';

const FeaturedPostCard = ({ post }) => (
  <div className="tw-relative tw-h-40 tw-mt-8">
    <div className="tw-absolute tw-rounded-lg tw-bg-center tw-bg-no-repeat tw-bg-cover tw-shadow-md tw-inline-block tw-w-full tw-h-40" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
      <div className="tw-absolute tw-rounded-lg tw-bg-center tw-bg-gradient-to-b tw-opacity-70 tw-from-gray-900 tw-via-gray-800 tw-to-black tw-w-full tw-h-40" />
        <div className="tw-flex tw-flex-col tw-rounded-lg tw-p-4 tw-items-center tw-justify-center tw-absolute tw-w-full tw-h-full">
          {/* <p className="text-white mb-4 text-shadow font-semibold text-xs">
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </p> */}
          <p className="tw-text-white tw-mb-4 text-shadow tw-font-semibold tw-text-3l tw-text-center">
            {post.title}
          </p>
        {/* <div className="flex items-center absolute bottom-5 w-full justify-center">
          <img
            // unoptimized
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle drop-shadow-lg rounded-full"
            src={post.author.photo.url}
          />
          <p className="inline align-middle text-white text-shadow ml-2 font-medium">
            {post.author.name}
          </p>
        </div> */}
      </div>
      <Link to={`/post/${post.slug}`}>
        <span className="tw-cursor-pointer tw-absolute tw-w-full tw-h-full" />
      </Link>
  </div>
);

export default FeaturedPostCard;
