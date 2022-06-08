import React, { useState, useEffect } from "react";
import { submitComment } from "../../services";

const CommentsForm = ({ slug }) => {
	const [error, setError] = useState(false);
	const [localStorage, setLocalStorage] = useState(null);
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [formData, setFormData] = useState({
		name: null,
		email: null,
		comment: null,
		storeData: false,
	});

	// const [cname, setCname] = useState("");
	// const [ccomment, setCcomment] = useState("");
	// const [cemail, setCemail] = useState("");

	useEffect(() => {
		setLocalStorage(window.localStorage);
		const initalFormData = {
			name: window.localStorage.getItem("name"),
			email: window.localStorage.getItem("email"),
			storeData:
				window.localStorage.getItem("name") ||
				window.localStorage.getItem("email"),
		};
		setFormData(initalFormData);
	}, []);

	const onInputChange = (e) => {
		const { target } = e;
		if (target.type === "checkbox") {
			setFormData((prevState) => ({
				...prevState,
				[target.name]: target.checked,
			}));
		} else {
			setFormData((prevState) => ({
				...prevState,
				[target.name]: target.value,
			}));
		}
	};

	const handlePostSubmission = async () => {
		setError(false);
		const { name, email, comment, storeData } = formData;
		if (!name || !email || !comment) {
			setError(true);
			return;
		}
		const commentObj = {
			name,
			email,
			comment,
			slug,
		};

		if (storeData) {
			localStorage.setItem("name", name);
			localStorage.setItem("email", email);
		} else {
			localStorage.removeItem("name");
			localStorage.removeItem("email");
		}

		const res = await submitComment(commentObj);

		if (res.createComment) {
			if (!storeData) {
				formData.name = "";
				formData.email = "";
			}
			formData.comment = "";
			setFormData((prevState) => ({
				...prevState,
				...formData,
			}));
			setShowSuccessMessage(true);
			setTimeout(() => {
				setShowSuccessMessage(false);
			}, 3000);
		}
	};

	return (
		<div className="tw-bg-white tw-shadow-xl tw-rounded-xl tw-p-8 tw-pb-8 tw-pt-2 tw-mb-8">
			<h3 className="tw-text-xl tw-mb-8 tw-font-semibold  tw-border-solid tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-b-2 tw-pb-4">
				Leave a Reply
			</h3>
			<div className="tw-grid tw-grid-cols-1 tw-gap-4 tw-mb-4">
				{/* increase placeholder size and left align */}
				<textarea
					value={formData.comment}
					onChange={onInputChange}
					className="tw-resize-none tw-p-4 tw-border-0 tw-outline-none tw-w-full tw-rounded-xl tw-h-25  tw-placeholder-gray-700 placeholder:tw-text-left tw-text-gray-700 focus:tw-ring-2 focus:tw-ring-gray-200 tw-bg-gray-100"
					name="comment"
					placeholder="Comment"
				/>
			</div>
			<div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-4 tw-mb-4">
				<input
					type="text"
					value={formData.name}
					onChange={onInputChange}
					className="tw-py-2 tw-px-4 tw-border-0 tw-outline-none tw-w-full tw-rounded-xl tw-bg-gray-100  tw-placeholder-gray-700 placeholder:tw-text-left tw-text-gray-700 focus:tw-ring-2 focus:tw-ring-gray-200 "
					placeholder="Name"
					name="name"
				/>
				<input
					type="email"
					value={formData.email}
					onChange={onInputChange}
					className="tw-py-2 tw-px-4 tw-border-0 tw-outline-none tw-w-full tw-rounded-xl tw-bg-gray-100  tw-placeholder-gray-700 placeholder:tw-text-left tw-text-gray-700 focus:tw-ring-2 focus:tw-ring-gray-200 "
					placeholder="Email"
					name="email"
				/>
			</div>
			<div className="tw-grid tw-grid-cols-1 tw-gap-4 tw-mb-4">
				<div>
					<input
						checked={formData.storeData}
						onChange={onInputChange}
						type="checkbox"
						id="storeData"
						name="storeData"
						value="true"
					/>
					<label className="tw-text-gray-500 tw-cursor-pointer tw-ml-2" htmlFor="storeData">
						{" "}
						Save my name, email in this browser for the next time I comment.
					</label>
				</div>
			</div>
			{error && (
				<p className="tw-text-xs tw-text-red-500">All fields are mandatory</p>
			)}
			<div className="tw-mt-8">
				<button
					type="button"
					onClick={handlePostSubmission}
					className="tw-transition tw-border-0 tw-duration-500 tw-ease hover:tw-bg-nishblue-700 tw-inline-block tw-bg-nishyellow-400 tw-text-lg tw-font-medium tw-rounded-full tw-text-white tw-px-8 tw-py-3 tw-cursor-pointer"
				>
					Post Comment
				</button>
				{showSuccessMessage && (
					<span className="tw-text-xl tw-float-right tw-font-semibold tw-mt-3 tw-text-green-500">
						Comment submitted for review
					</span>
				)}
			</div>
		</div>
	);
};

export default CommentsForm;
