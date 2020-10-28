import { useQuery, useQueryCache } from 'react-query'
import { request, gql } from 'graphql-request'
import { graphcms } from './graphcms'

export function useAccount(emailAddress: string) {
  const queryName = `account:${emailAddress}`

  const { status, data, error, isFetching } = useQuery(queryName, async () => {
    const { account } = await graphcms.request(accountQuery(emailAddress))
    return account
  })

  return { status, data, error, isFetching }
}

export async function getAccount(emailAddress: string) {
  const { account } = await graphcms.request(accountQuery(emailAddress))
  return account
}

export function accountQuery(emailAddress: string) {
  return gql`
    query getAccount {
      account(where: {emailAddress: "${emailAddress}"}) {
        id
        firstName
        lastName
        emailAddress

        starredPresets {
            id
        }

        authoredPresets {
            id
            title
            plugin
            genres
            instruments
            descriptors
            artwork {
                url
            }
        }
      }
    }
  `
}
