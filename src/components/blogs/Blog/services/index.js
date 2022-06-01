import { GraphQLClient, gql, request } from "graphql-request";
//const graphqlAPI = process.env.REACT_APP_GRAPHCMS_ENDPOINT;
const graphqlAPI =
	"https://api-ap-south-1.graphcms.com/v2/cl1f089r32nw801z63ut65fv6/master";

export const getPosts = async () => {
	const query = gql`
		query MyQuery {
			postsConnection(orderBy: createdAt_DESC) {
				edges {
					cursor
					node {
						author {
							bio
							name
							id
							photo {
								url
							}
						}
						createdAt
						slug
						title
						excerpt
						featuredImage {
							url
						}
						categories {
							name
							slug
						}
					}
				}
			}
		}
	`;

	const result = await request(graphqlAPI, query);

	return result.postsConnection.edges;
};

export const getCategories = async () => {
	const query = gql`
		query GetCategories {
			categories(orderBy: name_ASC) {
				name
				slug
			}
		}
	`;

	const result = await request(graphqlAPI, query);

	return result.categories;
};

export const getPostDetails = async (slug) => {
	const query = gql`
		query GetPostDetails($slug: String!) {
			post(where: { slug: $slug }) {
				title
				excerpt
				featuredImage {
					url
				}
				author {
					name
					bio
					photo {
						url
					}
				}
				createdAt
				slug
				content {
					raw
				}
				categories {
					name
					slug
				}
			}
		}
	`;

	const result = await request(graphqlAPI, query, { slug });

	return result.post;
};

export const getSimilarPosts = async (categories, slug) => {
	const query = gql`
		query GetPostDetails($slug: String!, $categories: [String!]) {
			posts(
				orderBy: createdAt_DESC
				where: {
					slug_not: $slug
					AND: { categories_some: { slug_in: $categories } }
				}
				last: 3
			) {
				title
				featuredImage {
					url
				}
				createdAt
				slug
			}
		}
	`;
	const result = await request(graphqlAPI, query, { slug, categories });

	return result.posts;
};

export const getAdjacentPosts = async (createdAt, slug) => {
	const query = gql`
		query GetAdjacentPosts($createdAt: DateTime!, $slug: String!) {
			next: posts(
				first: 1
				orderBy: createdAt_ASC
				where: { slug_not: $slug, AND: { createdAt_gte: $createdAt } }
			) {
				title
				featuredImage {
					url
				}
				createdAt
				slug
			}
			previous: posts(
				first: 1
				orderBy: createdAt_DESC
				where: { slug_not: $slug, AND: { createdAt_lte: $createdAt } }
			) {
				title
				featuredImage {
					url
				}
				createdAt
				slug
			}
		}
	`;

	const result = await request(graphqlAPI, query, { slug, createdAt });

	return { next: result.next[0], previous: result.previous[0] };
};

export const getCategoryPost = async (slug) => {
	const query = gql`
		query GetCategoryPost($slug: String!) {
			postsConnection(where: { categories_some: { slug: $slug } }) {
				edges {
					cursor
					node {
						author {
							bio
							name
							id
							photo {
								url
							}
						}
						createdAt
						slug
						title
						excerpt
						featuredImage {
							url
						}
						categories {
							name
							slug
						}
					}
				}
			}
		}
	`;

	const result = await request(graphqlAPI, query, { slug });

	return result.postsConnection.edges;
};

export const getFeaturedPosts = async () => {
	const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

	const result = await request(graphqlAPI, query);

	return result.posts;
};

export const submitComment = async (obj) => {
	// const result = await fetch(`${graphqlAPI}/api/comments`, {
	// 	method: "POST",
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 		Accept: "application/json",
	// 	},
	// 	body: JSON.stringify(obj),
	// }).then(() => {
	// 	console.log(obj);
	const graphQLClient = new GraphQLClient(graphqlAPI, {
		headers: {
			authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDg3MzE2MTAsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmdyYXBoY21zLmNvbS92Mi9jbDFmMDg5cjMybnc4MDF6NjN1dDY1ZnY2L21hc3RlciIsImh0dHBzOi8vbWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjFmZGU2N2UwLTgzNDUtNDMyNC1hZTg2LTg5MmI2ZmExOGIzNyIsImp0aSI6ImNsMWFoOWJqbGt6bGYwMXoxZ2VmdWc3OXIifQ.BNN2PUk3KvUW1Q9zDKIIwN6MiagIUqfJSTkU8fftkc_nBGndAk8R97nZx6GkQRMTpzZkEwLDFACFFRuLER4C-e7GMqACLi_WVBieOVR7OnMuXtzaLrgHjlNmnnsg7T_Thp8_06tK5zxhuwCmh_N1sEP-EMu7tRr0EV3_-zNeQTspzYKnpqf3Q6HZZfuerOeZ5iNG6bDfyaYqq_I2bNDy4Quc7g1Wwp7bnGTVVduzntQ9SbGUev7UUNOYg0ZdOJqHD94Ze6pA7K7dnllhyqugxuvBnhnY3Nabgj9_WkVj9TfAjDQ-9CIDGzEqmWwqDgvV0M4p1J9CVpMlbtq7U8FslDAjXq3qg0jjz2Sy7xzxpTytyd5E3fPGsmix8Y7coW1QGx21S6OWL1XF-iX7mWMDHrD07w74l9a4jf3j1a0aqLW10jK9o4FaOWdeBYeakpclXk3tOAtLoChKBT-38zR4xkgfGuWyzqSj1zi5bJlgnKzQxaZLHekwHqiz1VTTwA1KKDOqoDPAs82rdnlEG33D9LQpyvrCR-8q3sH1AuvpMiloVYqfJmZELAHRLRtsdbenNMo-aZkNNRnCYXt4ZEgfDZ5Jsc46sad2-HkMDeUyy4ZirhtkfusSjbwZzh_p5b_GX7kSe3PiN_Nhzc3Hy5PQtSgwSGc68_xgHibbfqvOdt4`,
		},
	});
	
	const query = gql`
		mutation CreateComment(
			$name: String!
			$email: String!
			$comment: String!
			$slug: String!
		) {
			createComment(
				data: {
					name: $name
					email: $email
					comment: $comment
					post: { connect: { slug: $slug } }
				}
			) {
				id
			}
		}
	`;

	const result = await graphQLClient.request(query, {
		name: obj.name,
		email: obj.email,
		comment: obj.comment,
		slug: obj.slug,
	});

	return result;
};

export const getComments = async (slug) => {
	const query = gql`
		query GetComments($slug: String!) {
			comments(
				orderBy: createdAt_DESC
				where: { post: { slug: $slug } }) 
				{
				name
				createdAt
				comment
			}
		}
	`;

	const result = await request(graphqlAPI, query, { slug });

	return result.comments;
};

export const getRecentPosts = async () => {
	const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_DESC
        last: 6
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
	const result = await request(graphqlAPI, query);

	return result.posts;
};

// export const getLikes = async () => {
//   const LIKE_POST_MUTATION = gql`
//     mutation likePost($postId: ID!){
//       likePost(postId: $postId){
//         id
//         likes{
//           id username
//         }
//         likeCount
//       }
//     }
//   `
// };

export const searchPosts = async () => {
	const query = gql`
		query MyQuery {
			postsConnection(orderBy: createdAt_DESC) {
				edges {
					cursor
					node {
						author {
							bio
							name
							id
							photo {
								url
							}
						}
						createdAt
						slug
						title
						excerpt
						featuredImage {
							url
						}
						categories {
							name
							slug
						}
					}
				}
			}
		}
	`;

	const result = await request(graphqlAPI, query);

	return result.postsConnection.edges;
};
