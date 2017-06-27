import { schema as authorSchema  } from "./author"
import { schema as commentSchema, resolvers as commentResolvers }  from "./comment"
import { merge, find, filter } from 'lodash';

const Post = `  
    type Post {
        id: Int!
        title: String 
        content: String
        author: Author
        votes : Int
        comments : [Comment]
    }

    type Mutation {
        upvotePost(postId: Int!): Post  
    }
`;

const posts = [
  { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
  { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },
  { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
  { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },
];

const portResolvers = {
  Query: {
    posts: (_, { id }) => find(posts, { id : id }),
  },
  Mutation: {
    upvotePost : (_, {postId} ) =>  {
      const post = find(posts, { id : postId })
      if (!post) {
        throw new Error('Couldnt find post with id ${postId}')
      }
      post.votes += 1
      return post
    }
  },
  Author: {
    posts: (author) => filter(posts, { authorId: author.id }),
  }  
}


var schemaFunc = () => [Post, commentSchema, authorSchema]
    

export const resolvers = merge(portResolvers, commentResolvers)
export const schema  = schemaFunc