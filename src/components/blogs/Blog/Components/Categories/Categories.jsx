import React, { useState, useEffect } from "react";
import { getCategories } from "../../services";

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((newCategories) => {
			setCategories(newCategories);
		});
	}, []);

	return (
		<div className="tw-bg-nishblue-400 tw-shadow-lg tw-rounded-lg tw-p-8 tw-pt-3 tw-pb-3 tw-mb-8">
			<h3 className="tw-text-xl tw-text-white tw-font-semibold tw-border-solid tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-b-2 tw-mb-2 tw-pb-4">
				Categories
			</h3>

			{categories.map((category, index) => (
				<div key={index}>
					<a href={`/category/${category.slug}`}>
						<span
							className={`tw-cursor-pointer tw-block ${
								index === categories.length - 1 ? "tw-border-b-0" : "tw-border-b"
							} tw-pt-3 tw-mt-3 tw-text-white tw-mb-2`}
						>
							{category.name}
						</span>
					</a>
					{/* <hr /> */}
				</div>
			))}
		</div>
	);
};

export default Categories;
