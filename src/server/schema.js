import { schema as Post, resolvers as postResolvers } from './post'
import { schema as Author, resolvers as authorResolvers } from './author'

import { merge, find, filter } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools'

const Query =`
  type Query {
    posts(id: Int!): Post
    author(id: Int!): Author
  }
`
var typeDefs = [Query, Author, Post]

var resolvers = merge(authorResolvers, postResolvers)

var schema = makeExecutableSchema({typeDefs, resolvers});

export default schema 









