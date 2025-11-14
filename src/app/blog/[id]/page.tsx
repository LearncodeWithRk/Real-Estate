
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';

type PageProps = {
  params: { id: string };
};

function PostImage({ imageId, alt }: { imageId: string, alt: string }) {
    const image = PlaceHolderImages.find((img) => img.id === imageId);
    if (!image) return null;

    return (
        <div className="relative aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
            <Image
                src={image.imageUrl}
                alt={alt}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover"
                priority
            />
        </div>
    );
}


function AuthorAvatar() {
  const authorImage = PlaceHolderImages.find((img) => img.id === 'team1');
  if (!authorImage) return null;

  return (
    <AvatarImage src={authorImage.imageUrl} alt="Author" />
  )
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl py-16 px-4">
      <div className="mb-8">
        <Button asChild variant="ghost">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
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
              <Avatar className="h-8 w-8">
                <Suspense>
                  <AuthorAvatar />
                </Suspense>
                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
          </div>
        </header>

        <Suspense>
            <PostImage imageId={post.imageId} alt={post.title} />
        </Suspense>

        <div
          className="prose prose-lg max-w-none mx-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
