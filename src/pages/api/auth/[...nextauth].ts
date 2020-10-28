import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Google({
      clientId:
        '575502647669-dp3d8r4ti6ovp8q18u5km9iojiuk2e5q.apps.googleusercontent.com',
      clientSecret: 'atRsVuDMIp1iTzpvoiQsbaEH',
    }),
  ],
}

export default (req, res) => NextAuth(req, res, options)
