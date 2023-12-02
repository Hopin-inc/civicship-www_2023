import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-white sticky">
      <div className="flex flex-row max-w-[1280px] items-center justify-between px-10 py-4 mx-auto">
        <Link href="/">
          <Image className="relative" alt="civicship" src="/logo.svg" width="144" height="28" />
        </Link>
        <div className="flex gap-[24px] items-center flex-[0_0_auto]">
          <div className="flex align-center gap-[8px] relative flex-[0_0_auto]">
            <Link href="#" className={buttonVariants({ variant: "link" })}>利用団体</Link>
            <Link href="#" className={buttonVariants({ variant: "link" })}>活動予定</Link>
            <Link href="#" className={buttonVariants({ variant: "link" })}>これまでの活動</Link>
          </div>
          <Link href="#" className={buttonVariants({ size: "lg" })}>団体として利用を申請する</Link>
        </div>
      </div>
    </div>
  )
}
