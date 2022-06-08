import React from "react";
import moment from "moment";

const AdjacentPostCard = ({ post, position }) => (
	<>
		<div
			className="tw-absolute tw-rounded-xl tw-bg-center tw-bg-no-repeat tw-bg-cover tw-shadow-md tw-inline-block tw-w-full tw-h-72"
			style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
		/>
		<div className="tw-absolute tw-rounded-xl tw-bg-center tw-bg-gradient-to-b tw-opacity-50 tw-from-gray-400 tw-via-gray-700 tw-to-black tw-w-full tw-h-72" />
		<div className="tw-flex tw-flex-col tw-rounded-xl tw-p-4 tw-items-center tw-justify-center tw-absolute tw-w-full tw-h-full">
			<p className="tw-text-white text-shadow tw-font-semibold tw-text-xs">
				{moment(post.createdAt).format("MMM DD, YYYY")}
			</p>
			<p className="tw-text-white text-shadow tw-font-semibold tw-text-2xl tw-text-center">
				{post.title}
			</p>
		</div>
		<a href={`/post/${post.slug}`} style={{textDecoration: 'none'}}>
			<span className="tw-z-10 tw-cursor-pointer tw-absolute tw-w-full tw-h-full" />
		</a>
		{position === "LEFT" && (
			<div className="tw-absolute arrow-btn tw-bottom-5 tw-text-center tw-py-3 tw-cursor-pointer tw-left-4 tw-rounded-full">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="tw-h-6 tw-w-6 tw-text-white tw-w-full"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M10 19l-7-7m0 0l7-7m-7 7h18"
					/>
				</svg>
			</div>
		)}
		{position === "RIGHT" && (
			<div className="tw-absolute arrow-btn tw-bottom-5 tw-text-center tw-py-3 tw-cursor-pointer tw-right-4 tw-rounded-full">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="tw-h-6 tw-w-6 tw-text-white tw-w-full"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					/>
				</svg>
			</div>
		)}
	</>
);

export default AdjacentPostCard;
