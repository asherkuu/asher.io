import NextAuth, {type NextAuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import {GITHUB_AUTH, NEXT_AUTH_SECRET} from "#/public/constant/env";

export const authOptions: NextAuthOptions = {
  secret: NEXT_AUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: GITHUB_AUTH.clientId,
      clientSecret: GITHUB_AUTH.clientSecret,
    }),
  ],
};

export default NextAuth(authOptions);
