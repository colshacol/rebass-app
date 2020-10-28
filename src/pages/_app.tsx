import { AuthProvider } from '../auth'
import { ReactQueryProvider } from '../cms/provider'
import { Provider } from 'next-auth/client'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <AuthProvider>
        <ReactQueryProvider>
          <Component {...pageProps} />
        </ReactQueryProvider>
      </AuthProvider>
    </Provider>
  )
}

export default MyApp
