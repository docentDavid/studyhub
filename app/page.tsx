import { mockArticles } from "@/data/mock-articles";
import { HomePageClient } from "@/components/home-page-client";

export default function HomePage() {
  return <HomePageClient articles={mockArticles} />;
}
