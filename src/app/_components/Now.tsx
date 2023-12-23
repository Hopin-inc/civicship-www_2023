import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getOngoingActivities } from "@/api";
import Carousel from "@/components/elements/Carousel";
import { landingPage } from "@/constants/url";
import { convertH2HM } from "@/lib/date";
import { displayNumber } from "@/lib/display";

const Now = async () => {
  const { data: activities, total } = await getOngoingActivities();
  return (
    <section id="now" className="flex flex-col py-4">
      <h2>
        NOW
        <span className="text-base font-normal ml-2">/ 活動中</span>
      </h2>
      <p className="mt-4">
        ボランティアの皆様にご協力いただき、モバイルアプリのcivicshipを通じてリアルタイムで計測されている、ボランティア活動を表示しています。アプリの詳細は
        <Link href={ landingPage } target="_blank" className="text-primary-gradient font-bold hover-link">
          こちら
        </Link>
        からご覧ください。
      </p>
      {
        activities.length > 0
          ? (
            <Carousel
              cols="2.5"
              className="mt-6"
              items={ activities.map((
                { id, totalHours, totalParticipants, background, participants, address, association },
                index
              ) => {
                const [hours, minutes] = convertH2HM(totalHours);
                return (
                  <Link href={ /*`/now/${ id }`*/ "#" } key={ index } className="hover-link">
                    <div
                      className="h-[200px] px-4 py-4 flex flex-row items-center justify-center gap-2 rounded-lg bg-black bg-opacity-40"
                      style={ { backgroundImage: `url(${ background })` } }
                    >
                      <p className="text-white text-xl font-semibold text-center">
                <span className="whitespace-nowrap">
                  <span className="text-5xl">{ displayNumber(hours) }</span>時間
                </span>
                        <span className="whitespace-nowrap">
                  <span className="text-4xl">{ displayNumber(minutes) }</span>分
                </span>
                      </p>
                      <div className="flex flex-col items-center">
                        { participants.length > 0 && (
                          <div className="w-[144px] h-[144px] relative">
                            <Image
                              src={ participants[0]?.avatar }
                              alt="1人目"
                              width="64"
                              height="64"
                              className="left-[40px] top-0 absolute rounded-full border-4 border-blue-600"
                            />
                            <Image
                              src={ participants[1]?.avatar }
                              alt="2人目"
                              width="64"
                              height="64"
                              className="left-0 top-[20px] absolute rounded-full border-4 border-blue-600"
                            />
                            <Image
                              src={ participants[2]?.avatar }
                              alt="3人目"
                              width="64"
                              height="64"
                              className="left-[80px] top-[20px] absolute rounded-full border-4 border-blue-600"
                            />
                            <Image
                              src={ participants[3]?.avatar }
                              alt="4人目"
                              width="96"
                              height="96"
                              className="left-[24px] top-[48px] absolute rounded-full border-4 border-blue-600"
                            />
                          </div>
                        ) }
                        { totalParticipants > participants.length && (
                          <div
                            className="px-3 py-0.5 mt-[-16px] rounded-full inline-flex flex-col justify-center items-center bg-primary-gradient z-10">
                            <p className="text-white text-base font-bold">+{ totalParticipants - participants.length }</p>
                          </div>
                        ) }
                      </div>
                    </div>
                    <ul className="mt-4 flex-col justify-start items-start gap-2 flex">
                      <li className="justify-start items-center gap-1.5 inline-flex">
                        <MapPin size="24"></MapPin>
                        <p>{ address }</p>
                      </li>
                      <li className="justify-start items-center gap-1.5 inline-flex">
                        <Image src={ association.avatar } alt="ロゴ" width="24" height="64" className="rounded"/>
                        <p>{ association.name }</p>
                      </li>
                    </ul>
                  </Link>
                );
              }) }
            />
          )
          : (
            <p className="mt-8 text-sm text-muted-foreground text-center">現在計測されている活動はありません。</p>
          )
      }
    </section>
  )
};

export default Now;
