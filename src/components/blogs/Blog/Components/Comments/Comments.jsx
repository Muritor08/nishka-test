import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";

import { getComments } from "../../services";

const Comments = ({ slug }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		getComments(slug).then((result) => {
			setComments(result);
		});
	}, []);

	return (
		<>
			{comments.length > 0 && (
				<div className="tw-bg-white tw-shadow-lg tw-rounded-lg tw-p-8 tw-pb-12 tw-mb-8">
					<h3 className="tw-text-xl tw-mb-8 tw-font-semibold  tw-border-solid tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-b-2 tw-pb-4">
						{comments.length} Comments
					</h3>
					{comments.map((comment, index) => (
						<div key={index} className="tw-border-solid tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-b-1 tw-border-gray-100 tw-mb-4 tw-pb-4">
							<p className="tw-mb-4">
								<span className="tw-font-semibold">{comment.name}</span> :{" "}
								{/* {moment(comment.createdAt).format("MMM DD, YYYY")} */}
								{parse(comment.comment)}
							</p>
							<p className="tw-whitespace-pre-line tw-text-gray-600 tw-w-full">
								{/* {parse(comment.comment)} */}
								{moment(comment.createdAt).format("MMM DD, YYYY")}
							</p>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Comments;
