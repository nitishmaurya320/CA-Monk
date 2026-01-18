import { Skeleton } from "@/components/ui/skeleton";

const BlogDetailSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-pulse">

      {/* Image Skeleton */}
      <Skeleton className="w-full h-[320px] rounded-xl" />

      {/* Category + Read Time */}
      
        <Skeleton className="h-4 w-20 rounded" />
        
      

      {/* Title */}
      <div className="space-y-3">
        <Skeleton className="h-8 w-3/4 rounded" />
        <Skeleton className="h-8 w-2/3 rounded" />
      </div>

      {/* Share Button */}
      <Skeleton className="h-10 w-32 rounded-lg" />

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-4 border rounded-xl space-y-3"
          >
            <Skeleton className="h-4 w-20 rounded" />
            <Skeleton className="h-5 w-28 rounded" />
          </div>
        ))}
      </div>

      {/* Content Paragraphs */}
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-[95%] rounded" />
            <Skeleton className="h-4 w-[90%] rounded" />
          </div>
        ))}
      </div>

    </div>
  );
};

export default BlogDetailSkeleton;
