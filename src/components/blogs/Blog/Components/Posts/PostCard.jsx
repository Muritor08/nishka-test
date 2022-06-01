import React from "react";

import moment from "moment";
import { Link } from "react-router-dom";
import LikeButton from '../LikeButton'

import { grpahCMSImageLoader } from "../../util";

const PostCard = ({ post }) => (
	<div className="tw-bg-nishblue-400 tw-shadow-lg tw-rounded-lg tw-p-0 lg:tw-p-8 tw-pb-12 tw-mb-8">
		<div className="tw-relative tw-overflow-hidden tw-shadow-md tw-pb-80 tw-mb-6">
			<img
				src={post.featuredImage.url}
				alt={post.title}
				className="tw-object-top tw-absolute tw-h-80 tw-w-full tw-object-cover  tw-shadow-lg tw-rounded-t-lg lg:tw-rounded-lg "
			/>
		</div>

		<h1 className="tw-transition tw-duration-700 tw-text-center tw-mb-8 tw-cursor-pointer tw-text-white hover:tw-text-nishblue-800  tw-text-3xl tw-font-semibold">
			<Link to={`/post/${post.slug}`}>{post.title}</Link>
		</h1>
		{/* <div className="block lg:flex text-center items-center justify-center mb-8 w-full"> */}
			{/* <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
				<img
					unoptimized
					loader={grpahCMSImageLoader}
					alt={post.author.name}
					height="30px"
					width="30px"
					className="align-middle rounded-full"
					src={post.author.photo.url}
				/>
				<p className="inline align-middle text-white ml-2 font-medium text-lg">
					{post.author.name}
				</p>
			</div> */}
			{/* <div className="flex items-center justify-center font-medium text-white">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 inline mr-2 text-nishyellow-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
				<span className="align-middle text-white">
					{moment(post.createdAt).format("MMM DD, YYYY")}
				</span>
			</div> */}
		{/* </div> */}
		<p className="tw-text-center tw-text-lg tw-text-white tw-font-normal tw-px-4 lg:tw-px-20 tw-mb-8">
			{post.excerpt}
		</p>
		<div className="tw-block lg:tw-flex tw-text-center tw-items-center tw-justify-center tw-w-full">			
			<div className="tw-text-center tw-flex tw-items-center tw-justify-center tw-mb-4 lg:tw-mb-0 tw-w-full lg:tw-w-auto tw-mr-8 tw-items-center">
				<Link to={`/post/${post.slug}`}>
					<span className="tw-transition tw-duration-500 tw-ease tw-transform hover:tw--translate-y-1 tw-inline-block tw-bg-nishyellow-400 tw-text-lg tw-font-semibold tw-rounded-full tw-text-white tw-px-8 tw-py-3 tw-cursor-pointer">
						Continue Reading
					</span>
				</Link>				
			</div>
			<div className="tw-flex tw-items-center tw-justify-center tw-font-medium tw-text-white">
				<LikeButton />
				{/* <LikeButton post={{ id, likes, likeCount }}></LikeButton> */}
			</div>
		</div>
	</div>
);

export default PostCard;
