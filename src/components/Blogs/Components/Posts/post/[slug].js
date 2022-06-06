import React, { Component } from "react";
import Header from '../../../../Layout/Header'
import Footer from '../../../../Layout/Footer'
import { PostDetail, Categories, RecentPostWidget, Author, Comments, CommentsForm, Loader } from "../..";
import { getPostDetails } from "../../../services";
import { AdjacentPosts } from "../..";

class PostDetails extends Component {
	state = { post: {}, isLoading: true };
	componentDidMount() {
		this.getPostData();
	}

	getPostData = async () => {
		const { match } = this.props;
		const { params } = match;
		const { postId } = params;
		const data = await getPostDetails(postId);
		this.setState({ post: data, isLoading: false });
		// console.log(data);
	};

	render() {
		const { post, isLoading } = this.state;
		return (
			<>
				{isLoading ? (
					<Loader />
				) : (
					<>
					<Header />
					<div className="tw-container tw-mx-auto tw-px-10 tw-pb-8 tw-pt-8 tw-bg-gray-100 tw-text-left">
						<div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-12 tw-gap-12">
							<div className="tw-col-span-1 lg:tw-col-span-8">
								<PostDetail post={post} />
								<Author author={post.author} />
								<AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
								<CommentsForm slug={post.slug} />
								<Comments slug={post.slug} />
							</div>
							<div className="tw-col-span-1 lg:tw-col-span-4">
								<div className="tw-relative lg:tw-sticky tw-top-8">
									<div>
									<RecentPostWidget
										slug={post.slug}
										categories={post.categories.map(
											(category) => category.slug
										)}
									/>
									</div>
									<div>
									<Categories />
									</div>
									
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
export default PostDetails;


