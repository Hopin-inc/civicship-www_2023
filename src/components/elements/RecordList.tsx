import { Clock, MapPin, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { convertDatetime, convertDuration } from "@/lib/date";
import { cn } from "@/lib/utils";
import { PastActivityDetail } from "@/types/api";

type Props = React.InputHTMLAttributes<HTMLDivElement> & {
  activities: PastActivityDetail[];
  showMore?: boolean;
}

const RecordList = ({ activities, showMore, className }: Props) => (
  <div className={ cn(className, "w-full bg-white rounded-xl flex flex-col justify-start items-center overflow-clip") }>
    <ul className="w-full">
      { activities.map(({ id, startsAt, endsAt, participantAvatars, totalParticipants, address }, index) => (
        <li
          className={ cn(
            (showMore || index < activities.length - 1) && "border-b border-border",
            "w-full bg-white",
          ) }
          key={ index }
        >
          <Link href={ `/activities/${ id }` }
                className="px-12 py-8 w-full flex flex-col justify-start items-start gap-8 hover-link">
            <p className="text-xl font-semibold">{ convertDatetime(startsAt, endsAt) }</p>
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              { participantAvatars.length > 0 && (
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <ul className="justify-start items-center flex ml-4">
                    { participantAvatars.map((avatar, idx) => (
                      <li key={ idx } className="-ml-4">
                        <Image src={ avatar } alt="参加者" width="80" height="80" className="rounded-full"/>
                      </li>
                    )) }
                  </ul>
                  <p className="text-sm">
                    { totalParticipants - participantAvatars.length > 0 && (
                      <span className="font-medium">+{ totalParticipants - participantAvatars.length }人</span>
                    ) }
                    が参加しました。
                  </p>
                </div>
              ) }
              <ul className="flex-col justify-start items-start gap-2 flex">
                <li className="justify-start items-center gap-1.5 inline-flex">
                  <MapPin/>
                  <p className="text-base font-normal">{ address }</p>
                </li>
                <li className="justify-start items-center gap-1.5 inline-flex">
                  <Clock/>
                  <p className="text-base font-normal">{ convertDuration(startsAt, endsAt) }</p>
                </li>
              </ul>
            </div>
          </Link>
        </li>
      )) }
    </ul>
    { showMore && (
      <div className="w-full px-12 py-4 rounded-md flex justify-center items-center gap-2">
        <Button variant="ghost">
        もっと見る
          <PlusCircle size="16" className="ml-1"/>
        </Button>
      </div>
    ) }
  </div>
);

export default RecordList;
