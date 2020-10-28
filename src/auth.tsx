import { signIn, signOut, useSession } from 'next-auth/client'
import { getAccount } from './cms/useAccount'
import * as React from 'react'

const Context = React.createContext({
  isLoading: false,
  session: null,
  account: null,
  logIn: () => {},
  logOut: () => {},
})

export function AuthProvider(props: any) {
  const [session, isLoadingSession] = useSession()
  const [isLoadingAccount, setLoadingAccount] = React.useState(false)
  const [account, setAccount] = React.useState(null)
  const isLoading = isLoadingSession || isLoadingAccount

  function logIn() {
    signIn('google', { callbackUrl: 'http://localhost:3000' })
  }

  function logOut() {
    setTimeout(() => window.location.assign('/'), 500)
    signOut()
  }

  React.useEffect(() => {
    if (session && session.user.email) {
      setLoadingAccount(true)
      getAccount(session.user.email).then((account) => {
        setAccount(account)
        setLoadingAccount(false)
      })
    }
  }, [session])

  return (
    <Context.Provider value={{ isLoading, session, account, logIn, logOut }}>
      {props.children}
    </Context.Provider>
  )
}

export const useAuth = () => {
  const { session, account, logIn, logOut } = React.useContext(Context)
  return { session, account, logIn, logOut }
}
