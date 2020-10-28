import { useQuery, useQueryCache } from 'react-query'
import { request, gql } from 'graphql-request'
import { graphcms } from './graphcms'

export function usePresetsByPlugin(criteria: any) {
  const queryName = `presets:${criteria.type}`

  const { status, data, error, isFetching } = useQuery(queryName, async () => {
    const { presets } = await graphcms.request(presetsByPluginQuery(criteria))
    return presets
  })

  console.log({ status, data, error, isFetching })
  return { status, data, error, isFetching }
}

export function presetsByPluginQuery(criteria: any) {
  return gql`
    query presetsByPlugin {
        presets(where: {plugin: ${criteria.plugin}}, orderBy: createdAt_ASC) {
            ${presetsQueryFields}
        }
    }
  `
}

export function allPresetsQuery(criteria: any) {
  return gql`
    query allPresetsQuery {
      presets {
        ${presetsQueryFields}
      }
    }
  `
}

const presetsQueryFields = `
    createdAt
    genreTags
    instrumentTags
    descriptorTags
    title
    plugin
    author {
        displayName
        avatar {
        url
        }
    }
    artwork {
        url
    }
    starredBy {
        id
    }
`
