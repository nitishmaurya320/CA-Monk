const BlogDetailSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-pulse">
      
      {/* Image Skeleton */}
      <div className="w-full h-[320px] bg-gray-200 rounded-xl mb-6" />

      {/* Category + Read time */}
      <div className="flex items-center gap-3 mb-3">
        <div className="h-4 w-20 bg-gray-200 rounded" />
        <div className="h-4 w-16 bg-gray-200 rounded" />
      </div>

      {/* Title */}
      <div className="space-y-3 mb-6">
        <div className="h-8 w-3/4 bg-gray-200 rounded" />
        <div className="h-8 w-2/3 bg-gray-200 rounded" />
      </div>

      {/* Share Button */}
      <div className="h-10 w-32 bg-gray-200 rounded-lg mb-8" />

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-4 border rounded-xl space-y-3"
          >
            <div className="h-4 w-20 bg-gray-200 rounded" />
            <div className="h-5 w-28 bg-gray-200 rounded" />
          </div>
        ))}
      </div>

      {/* Content Paragraphs */}
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-[95%] bg-gray-200 rounded" />
            <div className="h-4 w-[90%] bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetailSkeleton;
