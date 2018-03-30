import GraphQLServer from './GraphQLServer.js'
import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = {
  hello: () => 'Hello world!'
}

const server = new GraphQLServer(
  '/api', 4000, {
    schema: schema,
    rootValue: root,
    graphiql: true
  }
)

server.run()
