import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/db";
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";
import { getUserById } from "@/data/user";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (!user || !account) {
        return false;
      }

      const existingUser = await getUserById(user?.id);

      if (existingUser?.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id
        );
        if (!twoFactorConfirmation) return false;

        await prisma.twoFactorConfirmation.delete({
          where: {
            id: twoFactorConfirmation.id,
          },
        });
      }

      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      // @ts-ignore
      session.user.emailVerified = token.emailVerified ?? null;

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        const userData = await prisma.user.findUnique({
          where: { id: user.id },
        });

        token.emailVerified = userData?.emailVerified ?? null;
      }

      return token;
    },
  },
  events: {
    async linkAccount({ user, account }) {
      if (account?.provider === "google") {
        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            emailVerified: new Date(),
          },
        });
      }
    },
  },
  ...authConfig,
});
