import { useAuth } from '../auth'

export default function Index(props) {
  const auth = useAuth()

  return (
    <div>
      <h1>hello</h1>
      {auth.session && <button onClick={() => auth.logOut()}>sign out</button>}
      {!auth.session && <button onClick={() => auth.logIn()}>sign in</button>}
    </div>
  )
}
