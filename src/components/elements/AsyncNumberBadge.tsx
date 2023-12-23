import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const AsyncNumberBadge = async ({ fetchData }: {
  fetchData: () => Promise<number>,
}) => {
  async function NumberBadge() {
    const result = await fetchData();
    return (
      <div className="min-w-[36px] px-2 h-9 flex items-center justify-center bg-primary-gradient rounded-full">
        <span className="text-white">{ result }</span>
      </div>
    )
  }

  return (
    <Suspense fallback={ <span><Skeleton className="w-0 h-9" /></span> }>
      <NumberBadge />
    </Suspense>
  );
};

export default AsyncNumberBadge;