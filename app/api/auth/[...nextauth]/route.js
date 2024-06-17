import { error } from "console";
import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
      TwitterProvider({
        clientId: process.env.TWITTER_ID,
        clientSecret: process.env.TWITTER_SECRET,
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
    ],
    pages: {
      error: '/auth/error',
    },
    
    async session({ session, token, user }) {
      console.log("session", session)
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log("signIn", user);
      return true;
    },
  };


  
 
  const handler = NextAuth(authOptions);

  export { handler as GET, handler as POST };