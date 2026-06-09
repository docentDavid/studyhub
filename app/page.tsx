import { Suspense } from "react";
import { HomePageClient } from "@/components/home-page-client";
import { mockArticles } from "@/data/mock-articles";

export default function HomePage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]" />
      }
    >
      <HomePageClient articles={mockArticles} />
    </Suspense>
  );
}
