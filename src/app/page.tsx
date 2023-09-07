'use client'
import Hero from "@/components/Hero";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <Hero />
      <div>recent blog posts</div>
      <div>all blog posts</div>
    </main>
  )
}
