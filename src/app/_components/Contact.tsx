import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { contactForm } from "@/constants/url";
import { cn } from "@/lib/utils";

const Contact = () => (
  <section id="contact" className="flex flex-col py-4">
    <h2>お問い合わせ</h2>
    <Link href={ contactForm } target="_blank" className={ cn(buttonVariants({ variant: "default" }), "mt-4 text-lg p-6 gap-2") }>
      お問い合わせフォームはこちら
      <ExternalLink size="16"/>
    </Link>
  </section>
);

export default Contact;
