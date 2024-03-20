import { cn } from "@/utils";

export default function CardSKelton() {
  return (
    <>
      <div className="flex flex-col max-w-[305px] min-h-[390px] max-h-[400px] rounded-2xl bg-black/20 border-solid border border-[color:var(--Foundation-stroke-stroke-300,#EBEBEB)]">
        <div
          className={cn(
            "w-full h-full  rounded-xl bg-gradient-to-r from-transparent via-black/10  to-transparent absolute  before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer  before:bg-gradient-to-r  before:from-transparent before:via-black/20 dark:before:via-white/20 before:to-transparent isolate overflow-hidden shadow-lg shadow-black/20 before:border-t-2 before:border-b-2 before:border-primary max-w-[305px] max-h-[215px] dark:before:border-color-dark"
          )}
        />
        <div className="w-full space-y-2">
          <div className="animate-pulse [animation-delay:0.2s] bg-black/20 h-6 w-[90%] rounded-full" />
          <div className="animate-pulse [animation-delay:0.3s] bg-black/20 h-6 w-[80%] rounded-full" />
          <div className="animate-pulse [animation-delay:0.3s] bg-black/20 h-6 w-[80%] rounded-full" />
          <div className="animate-pulse [animation-delay:0.3s] bg-black/20 h-6 w-[80%] rounded-full" />
          <div className="animate-pulse [animation-delay:0.3s] bg-black/20 h-8  w-[40%] rounded-md" />
        </div>
      </div>
    </>
  );
}
