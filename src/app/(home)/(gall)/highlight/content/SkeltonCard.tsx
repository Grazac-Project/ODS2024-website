import { Skeleton } from "@/components/ui/skeleton";

export function SpeakerSkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 max-w-[420px]">
      <Skeleton className="h-[330px] w-[320px] max-w-full rounded-xl" />
      <div className="space-y-2 self-center">
        <Skeleton className="h-[56px] w-[225px]" />
      </div>
    </div>
  );
}
