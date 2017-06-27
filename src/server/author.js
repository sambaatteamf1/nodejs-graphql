import { schema as postSchema  } from "./post"
import { merge, find, filter } from 'lodash';

const Author=`
    type Author {
        id : Int!
        firstName : String
        lastName : String
        posts : [Post]  # list of posts by this author
    }
`
const authors = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
]

export const resolvers = {
  Query: {
    author: (_, { id }) => find(authors, { id: id })
  },
  Post: {
    author: (post) => find(authors, { id: post.authorId })
  }
}

var schemaFunc = ()=> [postSchema , Author]
    
    
export const schema = schemaFunc