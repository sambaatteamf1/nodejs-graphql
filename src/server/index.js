import express from 'express'
import bodyParser  from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import schema from './schema'
import config from '../config'

var app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}))

if (process.env.NODE_ENV !== "production") {
	app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}))
	app.listen(config.server.port, () => console.log('Now browse to localhost:4000/graphiql'))	
} else {
	app.listen(config.server.port)
}