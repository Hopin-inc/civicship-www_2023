import { ArrowRightCircle, Calendar, Tag, Link as LinkIcon, MapPin, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { formatDate } from "@/lib/date";
import { AssociationDetail } from "@/types/api";

type Props = React.InputHTMLAttributes<HTMLDivElement> & {
  association: AssociationDetail;
};

const Organization = async ({ association }: Props) => (
  <section className="w-full">
    <h2>主催団体</h2>
    <div className="mt-4 p-6 bg-white rounded-2xl flex flex-col justify-start items-center">
      <div className="w-full flex justify-start items-stretch gap-4">
        <Image src={ association.logo } alt="ロゴ" width="64" height="64" className="w-16 h-16"/>
        <div className="flex-grow flex flex-col justify-center items-start gap-2">
          <p className="text-xl">{ association.name }</p>
          { association.description && <p>{ association.description }</p> }
        </div>
      </div>
      <dl className="information-card-table mt-4">
        <dt>
          <Tag size="16" className="text-muted-foreground"/>
          <p className="text-sm text-muted-foreground">活動分野</p>
        </dt>
        <dd>
          <ul className="flex flex-wrap gap-2">
            { association.targets?.map((target, index) => (
              <li className="px-3 py-0.5 rounded-full bg-accent" key={ index }>{ target }</li>
            )) }
          </ul>
        </dd>
        <dt>
          <Calendar size="16" className="text-muted-foreground"/>
          <p className="text-sm text-muted-foreground">設立日</p>
        </dt>
        <dd>
          <p>{ formatDate(association.establishedAt) }</p>
        </dd>
        { association.homepage && (
          <>
            <dt>
              <LinkIcon size="16" className="text-muted-foreground"/>
              <p className="text-sm text-muted-foreground">Webサイト</p>
            </dt>
            <dd>
              <Link href={ association.homepage } target="_blank">{ association.homepage }</Link>
            </dd>
          </>
        ) }
        <dt>
          <MapPin size="16" className="text-muted-foreground"/>
          <p className="text-sm text-muted-foreground">所在地</p>
        </dt>
        <dd>
          <p>{ association.address }</p>
        </dd>
        <dt>
          <ShieldCheck size="16" className="text-muted-foreground"/>
          <p className="text-sm text-muted-foreground">所轄庁</p>
        </dt>
        <dd>
          <p>{ association.authorizedBy }</p>
        </dd>
      </dl>
      <div className="w-full flex justify-center items-center gap-2">
        <Link href={ `/organizations/${ association.id }` } className={ buttonVariants({ variant: "ghost" }) }>
          くわしく見る
          <ArrowRightCircle size="16" className="ml-1"/>
        </Link>
      </div>
    </div>
  </section>
);

export default Organization;
