import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  return (
    <header className="bg-white fixed w-full z-40">
      <div className="flex flex-row max-w-[1280px] items-center justify-between px-6 md:px-10 py-4 mx-auto">
        <Link href="/" className="hover-link">
          <Image className="relative" alt="civicship" src="/images/logo.svg" width="144" height="28"/>
        </Link>
        <nav className="hidden md:visible md:flex gap-[24px] items-center flex-[0_0_auto]">
          <ul className="flex align-center gap-[8px] relative flex-[0_0_auto]">
            <li>
              <Link href="/#organizations" className={ buttonVariants({ variant: "link" }) }>利用団体</Link>
            </li>
            {/*<li>*/}
            {/*  <Link href="/#plans" className={ buttonVariants({ variant: "link" }) }>活動予定</Link>*/}
            {/*</li>*/}
            <li>
              <Link href="/#records" className={ buttonVariants({ variant: "link" }) }>これまでの活動</Link>
            </li>
          </ul>
          <Link href="/#contact" className={ cn(buttonVariants({ size: "lg" }), "rounded-full") }>団体として利用を申請する</Link>
        </nav>
      </div>
    </header>
  )
};

export default Header;
