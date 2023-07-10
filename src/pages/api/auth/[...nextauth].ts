import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
