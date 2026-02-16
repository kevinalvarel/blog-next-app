"use client";

import { useEffect, useState } from "react";
import { getAllPosts } from "@/lib/posts";
import { PostGrid } from "@/components/blog/PostGrid";
import { PostListSkeleton } from "@/components/blog/PostListSkeleton";
import { AnimatedHeroText } from "@/components/react-bits";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import type { Post } from "@/lib/posts";

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Simulate loading time untuk showcase skeleton
    const timer = setTimeout(() => {
      const allPosts = getAllPosts();
      setPosts(allPosts);
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // Filter posts by search query (client-side only)
  const filteredPosts = posts.filter((post) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section - Background sudah di layout */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Animated Hero Title - React Bits Component #1 */}
            <AnimatedHeroText className="mb-4">Blog</AnimatedHeroText>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Insights, tutorials, and thoughts on modern web development,
              design patterns, and software engineering best practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" variant="default" className="min-w-40">
                Browse Articles
              </Button>
              <Button size="lg" variant="outline" className="min-w-40">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles by title, content, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <PostListSkeleton />
          ) : filteredPosts.length > 0 ? (
            <>
              <div className="mb-8 text-center">
                <p className="text-sm text-muted-foreground">
                  {filteredPosts.length === posts.length
                    ? `${posts.length} articles available`
                    : `${filteredPosts.length} of ${posts.length} articles`}
                </p>
              </div>
              <PostGrid posts={filteredPosts} />
            </>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto space-y-4">
                <div className="text-6xl">📭</div>
                <h3 className="text-2xl font-bold">No articles found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search query or browse all articles
                </p>
                <Button
                  onClick={() => setSearchQuery("")}
                  variant="outline"
                  className="mt-4"
                >
                  Clear Search
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section (Optional CTA) */}
      <section className="border-t bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold">Stay Updated</h2>
            <p className="text-muted-foreground text-lg">
              Get the latest articles delivered straight to your inbox. No spam,
              unsubscribe anytime.
            </p>
            <div className="flex gap-2 max-w-md mx-auto pt-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-11"
              />
              <Button className="px-8 h-11">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
