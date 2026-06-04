import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { SiteBranding } from "@/components/site-branding";
import { TopControls } from "@/components/top-controls";
import { Footer } from "@/components/footer";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  fallback: ["Roboto", "Lato", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "StudyHub",
    template: "%s | StudyHub",
  },
  description:
    "A responsive student information portal for guides, resources and student contributions.",
  applicationName: "StudyHub",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "StudyHub",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={openSans.className}>
        <header className="border-b border-[var(--border)] bg-[var(--background)] px-4 py-5 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            <SiteBranding />
            <TopControls />
          </div>
        </header>

        {children}

        <Footer />
      </body>
    </html>
  );
}
