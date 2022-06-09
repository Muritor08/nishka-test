import React, { useEffect, useState } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import ScrollToTop from "../ScrollToTop";
import './styles/globals.scss'
import { getPosts } from "./services";
import { Categories, CategoryNavBar, FeaturedPosts, PostCard, RecentPostWidget } from "./Components";


export default function Blog() {
  
  const [posts, setPosts] = useState([]);

	useEffect(() => {
		getPosts().then((result) => {
			setPosts(result);
		});
	}, []);


  return (
    <div >
        <ScrollToTop />
				<Header />
						<div className="tw-container tw-mx-auto tw-px-10 tw-mb-8">
						{/* <SearchBar /> */}
							<CategoryNavBar set={setPosts} />
							<FeaturedPosts />
							<div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-12 tw-gap-12">
								<div className="lg:tw-col-span-8 tw-col-span-1">
									
									{posts.map((post, index) => (
										<PostCard key={index} post={post.node} />
									))}
								</div>
								<div className="lg:tw-col-span-4 tw-col-span-1">
									<div className="lg:tw-sticky tw-relative tw-top-8">
										<RecentPostWidget />
										<Categories />
									</div>
								</div>
							</div>
						</div>
					
				<Footer />
		</div>
    
  );
}
