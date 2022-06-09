import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import { searchPosts } from "../../services";
import "./SearchBar.css";

const getFilteredItems = (query, items) => {
	if (!query) {
		return items;
	}
	return items.filter((post) => post.name.includes(query));
};

function SearchBar(props) {
	const [value, setValue] = useState("");
	const { set } = props;

	return (
		<div>
			<div class="search-box">
				<button 
					class="btn-search"
					onClick={async () => {
						let data = await searchPosts(value);
						set(data);
					}}
				>
					<FaSearch className="icon" />
				</button>
				<input
					type="text"
					class="input-search"
					value={value}
					onChange={async (e) => {
						setValue(e.target.value);
						// let data = await searchPosts(e.target.value);
						// set(data);
					}}
					placeholder="Type to Search"
				/>
			</div>
		</div>
	);
}

export default SearchBar;

{
	/* <ul>
{filteredItems.map((value) => (
<h2 key={value.name}>{value.name}</h2>
))} 
 </ul>  */
}