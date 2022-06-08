import React, { useEffect, useState } from "react";
import { SearchBar } from "..";
import { getCategories } from "../../services";
import "../../styles/globals.scss";

export default function CategoryNavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => 
      setCategories(newCategories)
    );
  }, []);
  return (
    <div className="tw-mt-8  tw-hidden lg:tw-block">
      <div className="tw-grid tw-grid-flow-col lg:tw-col-span-8 tw-col-span-1 tw-items-center">
        <a href="/Blogs" style={{textDecoration: 'none'}}>
          <span className="hover:tw-text-nishblue-800 tw-font-medium">
            All Posts
          </span>
        </a>
        {categories.map((category, index) => (
          <div className="tw-basis-1/6">
            <a key={index} href={`/category/${category.slug}`} style={{textDecoration: 'none'}}>
              <div className="hover:tw-text-nishblue-800 tw-font-medium">
                {category.name}
              </div>
            </a>
          </div>
        ))}
      <SearchBar />
      </div>
    </div>
  );
}
