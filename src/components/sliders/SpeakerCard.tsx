import { Skeleton } from "../ui/skeleton";

export function SpeakerSkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 max-w-[420px]">
      <Skeleton className="h-[330px] w-[320px] max-w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[320px] max-w-full" />
        <Skeleton className="h-4 w-[290px] max-w-[320px]" />
      </div>
    </div>
  );
}
