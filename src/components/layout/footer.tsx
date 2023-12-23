import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { companyWebsite, privacyPolicy, termsOfUse } from "@/constants/url";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="flex flex-col max-w-[960px] px-10 pt-12 pb-24 mx-auto">
        <nav>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href={ termsOfUse } target="_blank"
                    className={ cn(buttonVariants({ variant: "link" }), "px-0 py-0 h-auto") }>
                利用規約
              </Link>
            </li>
            <li>
              <Link href={ companyWebsite } target="_blank"
                    className={ cn(buttonVariants({ variant: "link" }), "px-0 py-0 h-auto") }>
                運営会社
              </Link>
            </li>
            <li>
              <Link href={ privacyPolicy } target="_blank"
                    className={ cn(buttonVariants({ variant: "link" }), "px-0 py-0 h-auto") }>
                プライバシーポリシー
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-2 mt-8">
            <Link href="/" className="hover-link">
              <Image className="relative" alt="civicship" src="/logo.svg" width="144" height="28"/>
            </Link>
            <p className="text-muted-foreground text-sm">© 2023-2024 Hopin Inc.</p>
          </div>
        </nav>
      </div>
    </footer>
  )
};

export default Footer;
