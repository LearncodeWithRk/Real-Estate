import { BlogPostCard } from "@/components/blog-post-card";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">From the Blog</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
          Stay updated with the latest news, tips, and trends in the real estate market.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
