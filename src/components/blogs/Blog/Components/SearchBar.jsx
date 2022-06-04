import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { searchPosts } from '../../services';
import './SearchBar.css'

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

    // <div className="tw-flex tw-items-center tw-justify-center tw-ml-0.5 ">
    //   <div className="tw-flex tw-border-2 tw-rounded-lg ">
    //       <input type="text" className="tw-px-4 tw-py-2 tw-border-0 tw-outline-none tw-w-96 tw-rounded-lg tw-font-montserrat tw-font-semibold tw-placeholder-navgreen-700 tw-text-gray-700 focus:tw-ring-2 focus:tw-ring-gray-200 tw-bg-gray-200 tw-shadow-lg" placeholder="Search" />
    //       <button className="tw-flex tw-items-center tw-justify-center tw-px-6 tw-ml-2 tw-border-0 tw-rounded-lg tw-cursor-pointer tw-shadow-lg">
    //           <svg className="tw-w-6 tw-h-6 tw-text-gray-600 tw-fill-navgreen-700" xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 24 24">
    //               <path
    //                   d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
    //           </svg>
    //       </button>
    //   </div>
    // </div>
    <div>
      {/* <div className='tw-flex tw-justify-center tw-items-center tw-m-0 tw-p-0'> */}
      <div class="search-box">
        {/* <div className="tw-relative tw-w-fit tw-h-fit"> */}
        <button class="btn-search">
          {/* <button class="tw-w-50px tw-h-50px tw-border-none tw-text-[20px] tw-font-bold tw-outline-0 tw-cursor-pointer tw-rounded-full tw-absolute tw-right-0 tw-text-[#130f40] tw-bg-transparent tw-pointer-events-painted focus:tw-w-200px focus:tw-bg-transparent focus:tw-rounded-none focus:tw-transition-all focus:tw-duration-500 focus:tw-ease-[cubic-bezier(0, 0.110, 0.35, 2)] focus:tw-border-b-1 focus:tw-border-solid focus:tw-border-t-0 focus:tw-border-r-0 focus:tw-border-l-0 focus:tw-border-b-[#ffffff80]"> */}
          {/* <span style="color:white"> */}
            {/* <i class="fas fa-search" /> */}
            <FontAwesomeIcon icon="fa-regular fa-magnifying-glass" style={{ color: 'red' }} />
            {/* <FontAwesomeIcon icon={['fas','fa-search']} style={{ color: 'red' }} /> */}
            {/* </span> */}
          </button>
          <input 
            type="text" 
            class="input-search"
            // className="tw-h-50px tw-w-50px tw-border-none tw-p-10px tw-text-[18px] tw-outline-0 tw-rounded-25px tw-pr-40px tw-transition-all tw-duration-500 tw-ease-in-out tw-bg=[#22a6b3] focus:tw-w-200px focus:tw-bg-transparent focus:tw-rounded-none focus:tw-transition-all focus:tw-duration-500 focus:tw-ease-[cubic-bezier(0, 0.110, 0.35, 2)] focus:tw-border-b-1 focus:tw-border-solid focus:tw-border-t-0 focus:tw-border-r-0 focus:tw-border-l-0 focus:tw-border-b-[#ffffff80] placeholder:tw-font-thin placeholde:tw-text-[18px]" 
            placeholder="Type to Search" 
          />
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