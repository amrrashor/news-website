'use client'
import Hero from "@/components/Hero";
import RecentBlogPost from "@/components/RecentBlogPost";

export default function Home() {
  return (
    <main>
      <Hero />
      <RecentBlogPost />
      <div>all blog posts</div>
    </main>
  )
}
