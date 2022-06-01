import React, { useState } from 'react'
import { searchPosts } from '../services';

const getFilteredItems = (query, items) => {
    if(!query){
        return items;
    }
    return items.filter(post => post.name.includes(query))
}

function SearchBar() {

    // const [query, setQuery] = useState("");

    // const {posts} = searchPosts;
    // const {items} = posts;

    // const filteredItems = getFilteredItems(query, items);

  return (

    <div className="tw-flex tw-items-center tw-justify-center tw-ml-0.5 ">
      <div className="tw-flex tw-border-2 tw-rounded-lg ">
          <input type="text" className="tw-px-4 tw-py-2 tw-border-0 tw-outline-none tw-w-96 tw-rounded-lg tw-font-montserrat tw-font-semibold tw-placeholder-navgreen-700 tw-text-gray-700 focus:tw-ring-2 focus:tw-ring-gray-200 tw-bg-gray-200 tw-shadow-lg" placeholder="Search" />
          <button className="tw-flex tw-items-center tw-justify-center tw-px-6 tw-ml-2 tw-border-0 tw-rounded-lg tw-cursor-pointer tw-shadow-lg">
              <svg className="tw-w-6 tw-h-6 tw-text-gray-600 tw-fill-navgreen-700" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                      d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
          </button>
      </div>
    </div>
  )
}

export default SearchBar;

{/* <ul>
{filteredItems.map((value) => (
<h2 key={value.name}>{value.name}</h2>
))} 
 </ul>  */}