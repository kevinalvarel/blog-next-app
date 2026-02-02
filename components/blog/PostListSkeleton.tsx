import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export function PostListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} className="h-full flex flex-col overflow-hidden">
          {/* Cover Image Skeleton */}
          <Skeleton className="w-full h-48" />

          <CardHeader className="space-y-3 pb-4">
            {/* Tags Skeleton */}
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-5 w-14" />
            </div>

            {/* Title Skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-3/4" />
            </div>
          </CardHeader>

          <CardContent className="grow pb-4">
            {/* Excerpt Skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4 pt-4 border-t">
            {/* Meta Information Skeleton */}
            <div className="flex flex-wrap gap-4 w-full">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-28" />
            </div>

            {/* Button Skeleton */}
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
