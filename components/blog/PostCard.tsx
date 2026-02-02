import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";
import { GlowCard } from "@/components/react-bits";
import type { Post } from "@/lib/posts";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <GlowCard className="h-full">
      <Card className="h-full flex flex-col overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
        {/* Cover Image */}
        {post.coverImage && (
          <div className="relative w-full h-48 overflow-hidden bg-muted">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        <CardHeader className="space-y-3 pb-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold leading-tight line-clamp-2 hover:text-primary transition-colors">
            {post.title}
          </h3>
        </CardHeader>

        <CardContent className="grow pb-4">
          {/* Excerpt */}
          <p className="text-muted-foreground line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 pt-4 border-t">
          {/* Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground w-full">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              <span>{post.author.name}</span>
            </div>
          </div>

          {/* Read Button */}
          <Link href={`/blog/${post.slug}`} className="w-full">
            <Button className="w-full group" variant="default">
              Read Article
              <svg
                className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </GlowCard>
  );
}
