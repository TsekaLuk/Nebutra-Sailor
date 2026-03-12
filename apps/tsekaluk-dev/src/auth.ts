import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
interface LinuxDoProfile {
  id: number
  username: string
  name: string | null
  avatar_url: string
  active: boolean
  trust_level: number
  silenced: boolean
}

function LinuxDo(config: {
  clientId?: string
  clientSecret?: string
}) {
  return {
    id: "linuxdo",
    name: "Linux DO",
    type: "oauth" as const,
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    authorization: {
      url: "https://connect.linux.do/oauth2/authorize",
      params: { response_type: "code" },
    },
    token: "https://connect.linux.do/oauth2/token",
    userinfo: "https://connect.linux.do/api/user",
    profile(profile: LinuxDoProfile) {
      return {
        id: String(profile.id),
        name: profile.name ?? profile.username,
        email: null,
        image: profile.avatar_url,
      }
    },
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    LinuxDo({
      clientId: process.env.LINUXDO_ID,
      clientSecret: process.env.LINUXDO_SECRET,
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    session({ session, token }) {
      if (token.sub) {
        return {
          ...session,
          user: {
            ...session.user,
            id: token.sub,
          },
        }
      }
      return session
    },
  },
})
