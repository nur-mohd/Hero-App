const AppsLoading = () => {
  return (
    <div className="container mx-auto">
      {/* Header Skeleton */}
      <div className="mx-auto max-w-[400px] space-y-4 text-center">
        <div className="skeleton mx-auto h-10 w-48"></div>

        <div className="skeleton mx-auto h-4 w-full max-w-[380px]"></div>
        <div className="skeleton mx-auto h-4 w-72"></div>
      </div>

      {/* Apps Skeleton */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="space-y-4 rounded-xl border p-4">
            {/* Image */}
            <div className="skeleton h-48 w-full rounded-lg"></div>

            {/* App Name */}
            <div className="skeleton h-6 w-3/4"></div>

            {/* Description */}
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-2/3"></div>

            {/* Bottom */}
            <div className="flex items-center justify-between pt-2">
              <div className="skeleton h-4 w-16"></div>
              <div className="skeleton h-8 w-20 rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppsLoading;
