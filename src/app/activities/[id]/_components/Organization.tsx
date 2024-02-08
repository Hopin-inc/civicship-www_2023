import { ArrowRightCircle, Calendar, Tag, Link as LinkIcon, MapPin, ShieldCheck, User, Crown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { formatDate } from "@/lib/date";
import { displayNumber } from "@/lib/display";
import { AssociationDetail } from "@/types/api";

type Props = React.InputHTMLAttributes<HTMLDivElement> & {
  association: AssociationDetail;
  participants: number;
  activityCount: number;
};

const Organization = async ({ association, participants, activityCount }: Props) => (
  <section className="w-full">
    <h2>主催団体</h2>
    <div className="mt-4 p-6 bg-white rounded-2xl flex flex-col justify-start items-center">
      <div className="w-full flex flex-col md:flex-row justify-start items-stretch gap-4">
        <Image src={ association.logo } alt="ロゴ" width="64" height="64" className="w-16 h-16"/>
        <div className="flex-grow flex flex-col justify-center items-start gap-2">
          <p className="text-xl">{ association.name }</p>
          { association.description && <p>{ association.description }</p> }
        </div>
      </div>
      <dl className="information-card-table mt-4">
        <dt className="md:!hidden">
          <Crown size="16" className="text-muted-foreground"/>
          <p className="text-sm text-muted-foreground">活動実績</p>
        </dt>
        <dd className="md:!hidden">
          <ul className="w-full flex flex-col">
            <li className="flex self-stretch justify-between items-center gap-8">
              <div className="justify-start items-center gap-2 flex">
                <User size="16"/>
                <p className="text-sm">参加者</p>
              </div>
              <p className="text-right text-sm font-medium">
                <span className="text-xl font-semibold">{ displayNumber(participants) }</span>
                人
              </p>
            </li>
            <li className="flex self-stretch justify-between items-center gap-8">
              <div className="justify-start items-center gap-2 flex">
                <Calendar size="16"/>
                <p className="text-sm">活動回数</p>
              </div>
              <p className="text-right text-sm font-medium">
                <span className="text-xl font-semibold">{ displayNumber(activityCount) }</span>
                回
              </p>
            </li>
          </ul>
        </dd>
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
      <div className="mt-4 md:mt-0 w-full flex justify-center items-center gap-2">
        <Link href={ `/organizations/${ association.id }` } className={ buttonVariants({ variant: "ghost" }) }>
          くわしく見る
          <ArrowRightCircle size="16" className="ml-1"/>
        </Link>
      </div>
    </div>
  </section>
);

export default Organization;
