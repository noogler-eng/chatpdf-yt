import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // "/" and "/api/webhook", "/signin", "/signup" routes are not protected
  publicRoutes: ["/", "/api/webhook"],
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
