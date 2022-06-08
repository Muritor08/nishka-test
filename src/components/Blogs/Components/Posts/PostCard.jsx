import React from "react";
import { Link } from "react-router-dom";
import LikeButton from "../LikeButton";


const PostCard = ({ post }) => (
	<div className="tw-bg-nishblue-400 tw-shadow-xl tw-rounded-xl tw-p-0 lg:tw-p-8 tw-pb-12 tw-mb-8 tw-text-left">
		<div className="tw-relative tw-overflow-hidden tw-shadow-md tw-pb-80 tw-mb-6">
			<img
				src={post.featuredImage.url}
				alt={post.title}
				className="tw-object-top tw-absolute tw-h-80 tw-w-full tw-object-cover  tw-shadow-xl tw-rounded-t-lg lg:tw-rounded-xl "
			/>
		</div>

		<h1 className="tw-transition tw-duration-700 tw-text-center tw-mb-8 tw-cursor-pointer tw-text-white hover:tw-text-nishblue-800  tw-text-3xl tw-font-semibold">
			<Link to={`/post/${post.slug}`} style={{textDecoration: 'none'}}>{post.title}</Link>
		</h1>
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
