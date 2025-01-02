import type { Metadata } from "next";
import "./globals.css";
import SessionProviderWrapper from "@/wrappers/SessionProvider";
import ThemeProvider from "@/wrappers/ThemeProvider";
import { Toaster } from "sonner";
import QueryClientWrapper from "@/wrappers/QueryClientWrapper";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProviderWrapper>
      <html lang="en">
        <body className={`antialiased`}>
          <NextTopLoader color="#8244ed" showSpinner={false} />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <Toaster />
            <QueryClientWrapper>{children}</QueryClientWrapper>
          </ThemeProvider>
        </body>
      </html>
    </SessionProviderWrapper>
  );
}
