
import Image from "next/image";
import { BlogPostCard } from "@/components/blog-post-card";
import { blogPosts } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function BlogPage() {
  const blogHeaderImage = PlaceHolderImages.find((img) => img.id === "blog-header");

  return (
    <>
      <section className="relative h-[50vh] w-full">
        {blogHeaderImage && (
          <Image
            src={blogHeaderImage.imageUrl}
            alt={blogHeaderImage.description}
            data-ai-hint={blogHeaderImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-md">
            From the Blog
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Stay updated with the latest news, tips, and trends in the real estate market.
          </p>
        </div>
      </section>
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
