import ProductModel from './models/product.model'

const products = [
  {
    name: 'GraphQL for Beginners',
    quantity: 1
  },
  {
    name: 'Advanced GraphQL',
    quantity: 1
  }
]

export const resolvers = {
  Query: {
    async products () {
      return await ProductModel.find()
    },
    async product (_, { id }) {
      return await ProductModel.findById(id)
    }
  },
  Mutation: {
    async createProduct (_, { product }) {
      return await ProductModel.create(product)
    },
    async updateProduct (_, {_id, product }) {
      return await ProductModel.findOneAndUpdate({ _id }, product, { new: true })
    },
    async deleteProduct (_, {_id }) {
      return await ProductModel.findByIdAndRemove({ _id })
    }
  }
  
}
