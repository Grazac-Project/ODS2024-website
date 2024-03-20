import { cn } from "@/utils";

type Props = {
  color?: string;
  innerColor?: string;
};
const LoadingSpinner = ({ color, innerColor }: Props) => (
  <div className="relative h-9 w-9 sm:h-16 sm:w-16 ">
    <div
      className={cn(
        "animate-loadspin rounded-full border-4 border-r-transparent border-b-transparent border-solid h-full w-full absolute",
        color || "border-primary"
      )}
    />

    <div
      className={cn(
        "rounded-full border-4 border-solid h-full w-full",
        innerColor || "border-primary/30"
      )}
    />
  </div>
);

export default LoadingSpinner;
