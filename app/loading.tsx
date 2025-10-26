import { LoadingAnimation } from "@/components/ui/loading";

export default function Loading() {
  return (
    <div className="flex flex-col items-center border-0">
        <LoadingAnimation />
    </div>
  );
}