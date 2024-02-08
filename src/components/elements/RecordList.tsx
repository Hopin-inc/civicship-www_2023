"use client";

import dayjs from "dayjs";
import { MapPin, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";
import { Button } from "@/components/ui/button";
import { convertDatetime } from "@/lib/date";
import { cn } from "@/lib/utils";
import { ActivityDetail } from "@/types/api";

type Props = React.InputHTMLAttributes<HTMLDivElement> & {
  activities: ActivityDetail[];
}

const LIST_UNIT = 5;

const RecordList = ({ activities, className }: Props) => {
  const [visibleActivities, setActivities] = useState(activities.slice(0, LIST_UNIT));
  const [showMore, setShowMore] = useState(visibleActivities.length < activities.length);
  const viewMore = () => {
    if (showMore) {
      const newLength = visibleActivities.length + LIST_UNIT;
      setShowMore(newLength < activities.length);
      setActivities(activities.slice(0, newLength));
    }
  };
  const fullConfig = resolveConfig(tailwindConfig);
  const breakpoints = fullConfig.theme?.screens;
  // @ts-ignore
  const isMobile = useMediaQuery({ query: `(min-width: ${ breakpoints ? breakpoints["md"] : 0 })` });
  const iconSize = isMobile ? 80 : 40;
  return (
    <div
      className={ cn(className, "w-full bg-white rounded-xl flex flex-col justify-start items-center overflow-clip") }>
      <ul className="w-full">
        { visibleActivities.map(({ id, plan, actual, participantAvatars, totalParticipants, address }, index) => {
          const isPlan = !!plan?.startsAt && dayjs().isBefore(dayjs(plan?.startsAt));
          const { startsAt, endsAt } = isPlan ? plan ?? {} : actual ?? {};
          return (
            <li
              className={ cn(
                (showMore || index < activities.length - 1) && "border-b border-border",
                "w-full bg-white",
              ) }
              key={ index }
            >
              <Link href={ `/activities/${ id }` }
                    className="px-6 md:px-12 py-6 md:py-8 w-full flex flex-col justify-start items-start gap-4 md:gap-8 hover-link">
                <p className="text-xl font-semibold">{ convertDatetime(startsAt, endsAt) }</p>
                <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                  { participantAvatars.length > 0 && (
                    <div className="self-stretch justify-start items-center gap-2 inline-flex">
                      <ul className="justify-start items-center flex ml-4">
                        { participantAvatars.map((avatar, idx) => (
                          <li key={ idx } className="-ml-4">
                            <Image src={ avatar } alt="参加者" width={ iconSize } height={ iconSize }
                                   className="rounded-full"/>
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
                    {/*<li className="justify-start items-center gap-1.5 inline-flex">*/ }
                    {/*  <Clock/>*/ }
                    {/*  <p className="text-base font-normal">{ convertDuration(startsAt, endsAt) }</p>*/ }
                    {/*</li>*/ }
                  </ul>
                </div>
              </Link>
            </li>
          );
        }) }
      </ul>
      { showMore && (
        <div className="w-full px-12 py-4 rounded-md flex justify-center items-center gap-2">
          <Button variant="ghost" onClick={ () => viewMore() }>
            もっと見る
            <PlusCircle size="16" className="ml-1"/>
          </Button>
        </div>
      ) }
    </div>
  )
};

export default RecordList;
