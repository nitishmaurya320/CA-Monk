import { Skeleton } from "@/components/ui/skeleton";

const BlogCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl p-5 mr-9 shadow-sm space-y-3">

     
      <div className="flex justify-between items-center">
        <Skeleton className="h-4 w-[10%] rounded" />
        <Skeleton className="h-4 w-[10%] rounded" />
      </div>

     
      <Skeleton className="h-6 w-3/4 rounded" />

     
      <div className="space-y-2">
        <Skeleton className="h-4 w-[90%] rounded" />
        <Skeleton className="h-4 w-[95%] rounded" />
        <Skeleton className="h-4 w-[90%] rounded" />
      </div>

    </div>
  );
};

export default BlogCardSkeleton;
