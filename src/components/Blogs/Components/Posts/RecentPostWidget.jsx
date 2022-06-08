import React, { useState, useEffect } from "react";
import { getSimilarPosts, getRecentPosts } from "../../services";
import "../../styles/globals.scss";
import { useRef } from "react";

const RecentPostWidget = ({ categories, slug }) => {
	const [relatedPosts, setRelatedPosts] = useState([]);
	const [count, setCount] = useState(0);
	const num = useRef(0);
	var i = 0;

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((prevCount) => prevCount + 1);
			if (slug) {
				getSimilarPosts(categories, slug).then((result) => {
					setRelatedPosts(result);
				});
			} else {
				getRecentPosts().then((result) => {
					setRelatedPosts(result);
					if (i < result.length) {
						num.current = i;
						i++;
					}
					if (i == result.length || i > result.length) {
						i = 0;
					}
				});
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [slug]);

	// useEffect(() => {
	// 	if (slug) {
	// 		getSimilarPosts(categories, slug).then((result) => {
	// 			setRelatedPosts(result);
	// 		});
	// 	} else {
	// 		getRecentPosts().then((result) => {
	// 			setRelatedPosts(result);
	// 			if(result.length>i){
	// 					num=i;
	// 					return num;

	// 			}
	// 			i++;
	// 		});
	// 	}
	// }, [slug]);
	return (
		<>
			<div className="tw-bg-nishblue-400 tw-shadow-xl tw-rounded-xl tw-p-8 tw-pb-3 tw-pt-2 tw-mb-8 tw-text-left">
				<h3 className="tw-text-xl tw-text-white tw-font-semibold tw-border-solid tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-b-2 tw-mb-2 tw-pb-4 tw-mt-4">
					{slug ? "Related Posts" : "Recent Posts"}
				</h3>
				<div className="tw-bg-nishblue-400 tw-scrollbar-hide tw-overflow-y-auto tw-h-80 ">
					<div className="con">
						<div className="scrolling tw-pt-4 tw-mt-4">
							{relatedPosts.map((post, index) => (
								<a href={`/post/${post.slug}`} className=" tw-text-md" key={index} style={{textDecoration: 'none'}}>
									<div
										key={index}
										className="tw-flex tw-items-center  tw-w-full tw-mb-4  tw-border-solid tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-b tw-border-white"
									>
										<div className="tw-w-16 tw-flex-none tw-mb-4">
											<img
												//	loader={grpahCMSImageLoader}
												alt={post.title}
												height="60px"
												width="60px"
												// unoptimized
												className="tw-align-middle  tw-rounded-full"
												src={`${post.featuredImage.url}`}
											/>
										</div>
										<div className="tw-flex-grow tw-ml-4 tw-mb-4">
											{/* <p className="tw-text-white tw-font-xs tw-font-semibold">
												{moment(post.createdAt).format("MMM DD, YYYY")}
											</p> */}
											<p className="tw-text-md tw-text-white tw-font-semibold ">{post.title}</p>
										</div>
									</div>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RecentPostWidget;
