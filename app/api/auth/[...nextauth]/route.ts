import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],

  secret: process.env.SECRET, // SECRET env variable
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
