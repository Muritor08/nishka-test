import React from 'react';

import moment from 'moment';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="tw-text-xl tw-font-semibold tw-mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="tw-mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="tw-text-md tw-font-semibold tw-mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="tw-bg-white tw-shadow-xl tw-rounded-xl lg:tw-p-8 tw-pb-12 tw-mb-8 tw-text-left">
        <div className="tw-relative tw-overflow-hidden tw-shadow-md tw-mb-6">
          <img src={post.featuredImage.url} alt="" className="tw-object-top tw-h-full tw-w-full tw-object-cover  tw-shadow-xl tw-rounded-t-lg lg:tw-rounded-xl" />
        </div>
        <div className="tw-px-4 lg:tw-px-0">
          <div className="tw-flex tw-items-center tw-mb-8 tw-w-full">
            <div className="tw-hidden md:tw-flex tw-items-center tw-justify-center lg:tw-mb-0 lg:tw-w-auto tw-mr-8 tw-items-center">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="atw-lign-middle tw-rounded-full"
                src={post.author.photo.url}
              />
              <p className="tw-inline tw-align-middle tw-text-gray-700 tw-ml-2 tw-font-medium tw-text-lg">{post.author.name}</p>
            </div>
            <div className="tw-flex tw-items-center tw-font-medium tw-text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="md:tw-flex tw-items-center tw-h-6 tw-w-6 tw-inline tw-mr-2 tw-text-nishyellow-400 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="tw-align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <h1 className="tw-mb-8 tw-text-3xl tw-font-semibold">{post.title}</h1>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>

    </>
  );
};

export default PostDetail;
