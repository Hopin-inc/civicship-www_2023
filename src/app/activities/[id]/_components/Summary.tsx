import dayjs from "dayjs";
import { Calendar, MapPin, UserCircle } from "lucide-react";
import Image from "next/image";
import { convertDatetime } from "@/lib/date";
import { cn } from "@/lib/utils";
import { PastActivityDetail } from "@/types/api";

type Props = React.InputHTMLAttributes<HTMLDivElement> & {
  activity: PastActivityDetail;
  showMore?: boolean;
}

const Summary = ({ activity, className }: Props) => (
  <section className={ cn(className, "w-full") }>
    <h2>活動概要</h2>
    <div className="mt-4 p-6 bg-white rounded-2xl flex flex-col justify-start items-center">
      <dl className="information-card-table">
        <dt>
          <Calendar size="16" className="text-muted-foreground"/>
          <p className="text-sm text-muted-foreground">日時</p>
        </dt>
        <dd>
          <p>{ convertDatetime(activity.startsAt, activity.endsAt) }</p>
        </dd>
        <dt>
          <UserCircle size="16" className="text-muted-foreground"/>
          <p className="text-sm text-muted-foreground">参加者</p>
        </dt>
        <dd className="items-center gap-2">
          { activity.participantAvatars.length > 0
            ? (
              <>
                <div className="justify-start items-center flex pl-2">
                  { activity.participantAvatars.map((src, index) => (
                    <Image src={ src } alt="参加者" width="40" height="40" className="rounded-full -ml-2"
                           key={ index }/>
                  )) }
                </div>
                <p className="text-sm">
                  { activity.totalParticipants - activity.participantAvatars.length > 0 && (
                    <span className="text-base font-medium">
                      +{ activity.totalParticipants - activity.participantAvatars.length }人
                    </span>
                  ) }
                  が{ dayjs().isBefore(activity.startsAt) ? "参加予定です" : "参加しました" }。
                </p>
              </>
            ) : (
              <p className="text-sm text-muted-foreground">
                { dayjs().isBefore(activity.startsAt) ? "まだいません" : "いませんでした" }。
              </p>
            ) }
        </dd>
        <dt>
          <MapPin size="16" className="text-muted-foreground"/>
          <p className="text-sm text-muted-foreground">場所</p>
        </dt>
        <dd>
          <p>{ activity.address }</p>
        </dd>
      </dl>
    </div>
  </section>
);

export default Summary;
