import { GraphQLClient } from 'graphql-request'
import { QueryCache } from 'react-query'

const ENDPOINT = process.env.CMS_ENDPOINT
const TOKEN = process.env.CMS_TOKEN

export const graphcms = new GraphQLClient(ENDPOINT, {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
})

export const cache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})
