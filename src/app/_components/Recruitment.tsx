import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { recruitmentOfTrialPartner } from "@/constants/url";
import { cn } from "@/lib/utils";

const Recruitment = () => (
  <section id="recruitment" className="flex flex-col py-4">
    <h2>トライアルパートナー募集</h2>
    <p className="mt-4">
      共助の循環を促進する、ボランティアの活動日数・時間を自動で記録できる『civicship』の実証実験パートナーを募集しています。
      ボランティアの活動を自動で記録して共助を可視化することで、市民活動のリソース調達を支援します。
    </p>
    <div className="w-full mt-6 relative">
      <Image src="/images/concept.png" alt="コンセプト画像" width="900" height="506"
             className="w-full bg-zinc-900 bg-opacity-10 rounded-lg"/>
      <Link href={ recruitmentOfTrialPartner } target="_blank"
            className={ cn(
              buttonVariants({ variant: "default" }),
              "px-6 right-4 md:right-12 bottom-4 md:bottom-8 absolute rounded-full shadow inline-flex gap-2",
            ) }
      >
        詳しくはこちらへ
        <ExternalLink size="16"/>
      </Link>
    </div>
  </section>
);

export default Recruitment;
