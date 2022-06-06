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

function SearchBar() {
	const [searchText, setValue] = useState("");

	// const {posts} = searchPosts;
	// const {items} = posts;
  	// const filteredItems = getFilteredItems(query, items);

	return (
		<div>
			<div class="search-box">
				<button class="btn-search">
					<FaSearch className="icon" />
				</button>
				<input
					type="text"
					class="input-search"
					value={searchText}
					onChange={(e) => {
						setValue(e.target.value);
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