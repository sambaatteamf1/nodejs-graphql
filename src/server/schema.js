import { graphql, buildSchema } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'

var resolvers = {
  helloQuery: {
    hello(root) {
      return 'world';
    }
  }
};

var typeDefs = [`

    type helloQuery {
      hello: String
    }

    schema {
      query: helloQuery
    }`
]

var schema = makeExecutableSchema({typeDefs, resolvers});

export default schema 

