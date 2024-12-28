import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import { apiAuthPrefix } from "@/routes";
import { publicRoutes } from "@/routes";
import { authRoutes } from "@/routes";
import { DEFUALT_LOGIN_REDIRECT } from "@/routes";
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) return;

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFUALT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoutes) {
    let callbackurl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackurl += nextUrl.search;
    }

    const encodedCallbackurl = encodeURIComponent(callbackurl);
    return Response.redirect(
      new URL(`/login?callbackUrl=${encodedCallbackurl}`, nextUrl)
    );
  }

  return;
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
