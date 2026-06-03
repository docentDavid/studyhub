import type { Metadata } from "next";
import Link from "next/link";
import { TopControls } from "@/components/top-controls";
import "./globals.css";

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
      <body>
        <header className="border-b border-purple-100 bg-[#faf8ff] px-4 py-5 dark:border-purple-950 dark:bg-[#0f0b1d] sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            <Link
              href="/"
              className="group block rounded-xl p-1 transition hover:bg-purple-50 dark:hover:bg-purple-950"
            >
              <p className="text-sm font-black uppercase tracking-wide text-[#663399] dark:text-purple-300">
                StudyHub
              </p>

              <p className="text-sm text-gray-500 transition group-hover:text-[#663399] dark:text-gray-400 dark:group-hover:text-purple-300">
                Student Information Portal
              </p>
            </Link>

            <TopControls />
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
