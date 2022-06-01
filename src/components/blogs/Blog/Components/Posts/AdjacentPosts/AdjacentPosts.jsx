import React, { useState, useEffect } from 'react';

import { AdjacentPostCard } from '../..';
import { getAdjacentPosts } from '../../../services';

const AdjacentPosts = ({ createdAt, slug }) => {
  const [adjacentPost, setAdjacentPost] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getAdjacentPosts(createdAt, slug).then((result) => {
      setAdjacentPost(result);
      setDataLoaded(true);
    });
  }, [slug]);

  return (
    <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-8 tw-gap-12 tw-mb-8">
      {dataLoaded && (
        <>
          {adjacentPost.previous && (
            <div className={`${adjacentPost.next ? 'tw-col-span-1 lg:tw-col-span-4' : 'tw-col-span-1 lg:tw-col-span-8'} adjacent-post tw-rounded-lg tw-relative tw-h-72`}>
              <AdjacentPostCard post={adjacentPost.previous} position="LEFT" />
            </div>
          )}
          {adjacentPost.next && (
            <div className={`${adjacentPost.previous ? 'tw-col-span-1 lg:tw-col-span-4' : 'tw-col-span-1 lg:tw-col-span-8'} adjacent-post tw-rounded-lg tw-relative tw-h-72`}>
              <AdjacentPostCard post={adjacentPost.next} position="RIGHT" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdjacentPosts;
