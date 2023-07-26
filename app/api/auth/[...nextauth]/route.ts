import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import NextAuth, { Profile, Session } from "next-auth";

import User from "@/models/User";
import { connectDb } from "@/utils/database";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }: { session: Session }) {
      // const sessionUser = await User.findOne({ email: session.user?.email });
      // return { ...session, id: sessionUser._id ?? undefined };
      return session;
    },
    async signIn({ profile }: { profile?: Profile | undefined }) {
      const GoogleProfile = profile as GoogleProfile;
      try {
        await connectDb();

        const userExists = await User.findOne({ email: GoogleProfile.email });

        console.log("userExists", userExists);

        if (!userExists) {
          const user = await User.create({
            email: GoogleProfile.email,
            name: GoogleProfile.given_name,
            fullName: GoogleProfile.name,
          });
        }

        return true;
      } catch {
        return false;
      }
    },
    pages: {
      signIn: "auth/signin",
      error: "auth/signin",
    },
  },
  secret: process.env.SECRET, // SECRET env variable
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
