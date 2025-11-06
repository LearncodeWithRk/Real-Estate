
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, UserCircle } from 'lucide-react';

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === post.imageId);
  const authorImage = PlaceHolderImages.find((img) => img.id === 'team1');

  return (
    <div className="container mx-auto max-w-4xl py-16 px-4">
      <article>
        <header className="mb-8">
          <div className="text-center mb-4">
            <Badge>Real Estate</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-center mb-4">
            {post.title}
          </h1>
          <div className="flex justify-center items-center gap-6 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              {authorImage && (
                <Avatar className="h-8 w-8">
                  <AvatarImage src={authorImage.imageUrl} alt={post.author} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
          </div>
        </header>

        {image && (
          <div className="relative aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
            <Image
              src={image.imageUrl}
              alt={post.title}
              data-ai-hint={image.imageHint}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none mx-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
