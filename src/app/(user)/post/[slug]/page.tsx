import { groq } from "next-sanity";
import { Post } from "../../../../../types";
import { client, urlFor } from "../../../../../sanity/lib/client";
import Container from "@/components/Container";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/components/RichText";

interface SlugPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 30

export const generateStaticParams = async () => {
  const query = groq`*[_type == 'post']{
        slug
    }`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug?.slug?.current);
  return slugRoutes?.map((slug) => ({
    slug,
  }));
};

const SlugPage = async ({ params: { slug } }: SlugPageProps) => {
  const query = groq`*[_type == 'post' && slug.current == $slug][0]{
        ...,
        body,
        author->
    }`;
  const post: Post = await client.fetch(query, { slug });

  return (
    <Container className="mb-10">
      <div className="flex flex-col md:flex-row items-center mb-10 ">
        <div className="w-full md:w-2/3 ">
          <Image
            src={urlFor(post?.mainImage).url()}
            width={500}
            height={500}
            alt="main image"
            className="object-cover w-full"
          />
        </div>
        <div className="md:w-1/3 w2/3 flex flex-col items-center gap-5p px-4 mt-5">
          <Image
            src={urlFor(post?.author?.image).url()}
            width={200}
            height={200}
            alt="author image"
            className="w-32 h-32 rounded-full object-cover"
          />
          <div className="flex items-center flex-col">
          <p className="text-3xl text-[#5442ae] font-semibold">
            {post?.author?.name}
          </p>
          <p className="text-center tracking-wide text-sm">
            {post?.author?.description}
          </p>

          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://www.linkedin.com/in/thiago-alves-010915274/"
              target="_blank"
              className="w-10 h-10 bg-blue-500 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/Thiago87dev"
              target="_blank"
              className="w-10 h-10 bg-gray-500 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.instagram.com/thiagopaulista87/"
              target="_blank"
              className="w-10 h-10 bg-[#bc1888] text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCgfRBiS95ojl8xsI6XtqjIw"
              target="_blank"
              className="w-10 h-10 bg-red-600 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <PortableText value={post?.body} components={RichText}/>
      </div>
    </Container>
  );
};

export default SlugPage;
