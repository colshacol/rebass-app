import * as React from 'react'
import { ReactQueryCacheProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
import { cache } from './graphcms'

export function ReactQueryProvider(props) {
  return (
    <ReactQueryCacheProvider queryCache={cache}>
      <ReactQueryDevtools initialIsOpen />
      {props.children}
    </ReactQueryCacheProvider>
  )
}
