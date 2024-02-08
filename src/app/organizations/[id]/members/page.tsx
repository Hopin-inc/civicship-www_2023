import dayjs from "dayjs";
import { Calendar } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import { getOrganizationMembers } from "@/api";
import { displayNumber } from "@/lib/display";

const OrganizationDetailMembers = async () => {
  const pathname = headers().get("x-url") || "";
  const locations = pathname.split("/");
  const id = locations[2];
  const { members } = await getOrganizationMembers(id);
  return members.length
    ? (
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        { members.map((m, index) => {
          // const [hours, minutes] = convertH2HM(m.activityHours);
          return (
            <li className="p-8 bg-white rounded-lg flex flex-col justify-start items-center" key={ index }>
              <Image src={ m.avatar } width="80" height="80" alt="アイコン" className="rounded-full"/>
              <div className="py-4 flex flex-col justify-center items-center gap-2">
                <p className="text-center text-xl font-semibold">{ m.name }</p>
                { m.lastActivityDate && (
                  <p className="text-center text-muted-foreground text-sm font-medium">
                    最終活動日: { displayLastActivity(m.lastActivityDate) }
                  </p>
                ) }
              </div>
              <ul className="w-full mt-2 bg-white rounded-2xl flex flex-col gap-2">
                <li className="self-stretch justify-between items-center inline-flex">
                  <div className="justify-start items-center gap-2 flex">
                    <Calendar size="16"/>
                    <p className="text-sm">活動回数</p>
                  </div>
                  <p className="text-right text-sm font-medium">
                    <span className="text-xl font-semibold">{ displayNumber(m.activityCount) }</span>
                    回
                  </p>
                </li>
                {/*<li className="self-stretch justify-between items-center inline-flex">*/ }
                {/*  <div className="justify-start items-center gap-2 flex">*/ }
                {/*    <Clock size="16"/>*/ }
                {/*    <p className="text-sm">活動時間</p>*/ }
                {/*  </div>*/ }
                {/*  <p className="text-right text-sm font-medium">*/ }
                {/*    <span className="text-xl font-semibold">{ displayNumber(hours) }</span>*/ }
                {/*    時間*/ }
                {/*    <span className="text-xl font-semibold">{ displayNumber(minutes) }</span>*/ }
                {/*    分*/ }
                {/*  </p>*/ }
                {/*</li>*/ }
              </ul>
            </li>
          )
        }) }
      </ul>
    )
    : (
      <p className="text-muted-foreground text-sm">メンバーは登録されていません。</p>
    );
};

const displayLastActivity = (datetime: string) => {
  const differenceInDays = dayjs().diff(dayjs(datetime), "d");
  return `${ differenceInDays }日前`;
}

export default OrganizationDetailMembers;
