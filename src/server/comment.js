import { Author } from "./author"
import { Post  } from "./post"
import { merge, find, filter } from 'lodash';

const Comment = `
    type Comment {
        id: Int!
        message : String
        post : Post
        author : Author
    }
`

const comments = [
  { id: 1, postId: 1, message: 'Very useful article', authorId: 1 },
  { id: 2, postId: 1, message: 'Thank you', authorId: 2 },
];

export const resolvers = {
  Post: {
    comments : (post) => filter(comments, { postId: post.id })
  }
}

var schemaFunc = () => [ Comment ]

export const schema = schemaFunc