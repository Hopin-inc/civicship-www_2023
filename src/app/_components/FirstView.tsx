import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { getTotalDays } from "@/api";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { contactForm } from "@/constants/url";
import { displayNumber } from "@/lib/display";
import { cn } from "@/lib/utils";

const FirstView = () => (
  <section className="flex flex-col items-center w-full max-w-[960px] px-10 py-20">
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl text-center font-bold">あなたの活動が<br/>団体への応援を大きくする｡</h1>
      <p className="text-center">シビックシップは、ありたい社会に向かう市民活動を応援しています｡</p>
    </div>
    <Link href={ contactForm } target="_blank" className={ cn(buttonVariants({ size: "lg" }), "mt-6 rounded-full") }>
      <ArrowRightCircle className="mr-2"/>
      団体として利用を申請する
    </Link>
    <div className="text-center mt-8">
      <div className="flex flex-row items-baseline justify-center">
        <p>累計</p>
        <Suspense fallback={ <span><Skeleton className="w-16 h-10"/></span> }>
          <TotalHours/>
        </Suspense>
        <p>回</p>
      </div>
      <p>のボランティア活動が生まれています｡</p>
    </div>
  </section>
);

const TotalHours = async () => {
  const total = await getTotalDays();
  if (total !== undefined) {
    return (
      <p className="text-5xl font-extrabold text-primary-gradient">{ displayNumber(total) }</p>
    )
  }
};

export default FirstView;
