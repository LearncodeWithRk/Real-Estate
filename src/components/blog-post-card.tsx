
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function BlogPostCard({ post }: { post: BlogPost }) {
  const image = PlaceHolderImages.find(img => img.id === post.imageId);
  const authorImage = PlaceHolderImages.find(img => img.id === 'team1'); // Example author image

  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      {image && (
        <CardHeader className="p-0">
          <Link href={`/blog/${post.id}`}>
            <div className="aspect-video relative">
              <Image
                src={image.imageUrl}
                alt={post.title}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover"
              />
            </div>
          </Link>
        </CardHeader>
      )}
      <CardContent className="flex-grow p-6 flex flex-col">
        <div className="flex-grow">
            <p className="text-sm text-primary font-semibold mb-2">Real Estate</p>
            <h3 className="text-xl font-bold mb-3">
            <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                {post.title}
            </Link>
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-3">
            {post.excerpt}
            </p>
        </div>
        <div className="mt-4 pt-4 border-t flex items-center justify-between">
            <div className="flex items-center gap-3">
                {authorImage && (
                    <Avatar className="h-9 w-9">
                        <AvatarImage src={authorImage.imageUrl} alt={post.author} />
                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                )}
                <div>
                    <p className="text-sm font-semibold">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                </div>
            </div>
            <Link href={`/blog/${post.id}`} className="text-primary hover:underline flex items-center text-sm">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
        </div>
      </CardContent>
    </Card>
  );
}
