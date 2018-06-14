import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
  type Query {
    products: [Product],
    product (id: ID): Product
  }

  type Product {
    id: ID
    name: String,
    quantity: Int
  }

  input ProductInput {
    name: String,
    quantity: Int
  }

  type Mutation {
    createProduct(product: ProductInput): Product,
    updateProduct(_id: ID, product: ProductInput): Product,
    deleteProduct(_id: ID): Product,
  }
`

export default makeExecutableSchema({
  typeDefs,
  resolvers
})
