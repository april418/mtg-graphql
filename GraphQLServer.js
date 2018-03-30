import express from 'express'
import graphqlHTTP from 'express-graphql'

export default class GraphQLServer {
  /**
   * @param string rootUri
   * @param object config
   */
  constructor(rootUri = '', port = 4000, config = {}) {
    this.app = express()
    this.rootUri = rootUri
    this.port = port
    this.app.use(rootUri, graphqlHTTP(config))
  }

  run() {
    return this.app.listen(this.port, this.handleListening.bind(this))
  }

  handleListening() {
    console.log(`Now browse to localhost:${this.port}${this.rootUri}`)
  }

  handleError() {
  }
}
