import Hero from "@/components/Hero";
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import BlogContent from "@/components/BlogContent";

const query = groq`*[_type == 'post']{
  ...,
  author->,
    categories[]->
} | order(_createdAt asc)`

export default async function Home() {
  const posts = await client.fetch(query)
  
  return (
    <main>
      <Hero/>
      <BlogContent posts={posts}/>
    </main>
  );
}
