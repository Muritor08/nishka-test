import React, { Component } from "react";
import { Categories, PostCard, Loader } from "../..";
import { getCategoryPost } from "../../../services";
import Footer from "../../../../Layout/Footer";
import Header from "../../../../Layout/Header";

class CategoryPost extends Component {
    state = { posts:{} , isLoading: true};
    componentDidMount(){
        this.getCategoryPostData();
    }

    getCategoryPostData = async() => {
        const { match } = this.props;
        const { params } = match;
        const { categoryId } = params;
        const data = await getCategoryPost(categoryId);
        this.setState({ posts: data, isLoading: false });
        // console.log(data);
    };

    render(){
        const { posts, isLoading } = this.state;
        return (
            <>
                {isLoading ? (
                    <Loader />
                ) : (
                    <>
					<Header />
                    <div className="tw-container tw-mx-auto tw-px-10 tw-mb-8 tw-mt-8">
                        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-12 tw-gap-12">
                            <div className="tw-col-span-1 lg:tw-col-span-8">
                            {posts.map((post, index) => (
                                <PostCard key={index} post={post.node} />
                            ))}
                            </div>
                            <div className="tw-col-span-1 lg:tw-col-span-4">
                            <div className="tw-relative lg:tw-sticky tw-top-8">
                                <Categories />
                            </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
					</>
                )}
            </>
        );
    }
}

export default CategoryPost;
