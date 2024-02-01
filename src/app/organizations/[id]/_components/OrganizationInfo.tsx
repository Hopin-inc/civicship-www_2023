import { Calendar, User } from "lucide-react";
import Image from "next/image";
import { getOrganization } from "@/api";
import { displayNumber } from "@/lib/display";

type Props = React.InputHTMLAttributes<HTMLDivElement> & {
  id: string;
}

const OrganizationInfo = async ({ id }: Props) => {
  const association = await getOrganization(id);
  if (association) {
    // const [hours, minutes] = convertH2HM(association.engagement.activityHour);
    return (
      <div className="w-full p-10 bg-white rounded-lg flex flex-col justify-start items-center">
        <div className="self-stretch h-[120px] bg-image-contain"
             style={ { backgroundImage: `url(${ association?.logo })` } }/>
        <div className="mt-4 self-start">
          <h3 className="text-base font-normal">
            { association.prefix && association.prefix }
            { association.prefix && <br/> }
            <span className="text-xl font-semibold">{ association.name }</span>
            { association.suffix && <br/> }
            { association.suffix && association.suffix }
          </h3>
          { association.name && (
            <p className="mt-2">{ association.description }</p>
          ) }
        </div>
        <ul className="w-full mt-4 bg-white rounded-2xl flex flex-col gap-2">
          <li className="self-stretch justify-between items-center inline-flex">
            <div className="justify-start items-center gap-2 flex">
              <User size="16"/>
              <p className="text-sm">参加者</p>
            </div>
            <p className="text-right text-sm font-medium">
              <span className="text-xl font-semibold">{ displayNumber(association.engagement.participants) }</span>
              人
            </p>
          </li>
          <li className="self-stretch justify-between items-center inline-flex">
            <div className="justify-start items-center gap-2 flex">
              <Calendar size="16"/>
              <p className="text-sm">活動回数</p>
            </div>
            <p className="text-right text-sm font-medium">
              <span className="text-xl font-semibold">{ displayNumber(association.engagement.activityCount) }</span>
              回
            </p>
          </li>
          {/*<li className="self-stretch justify-between items-center inline-flex">*/}
          {/*  <div className="justify-start items-center gap-2 flex">*/}
          {/*    <Clock size="16"/>*/}
          {/*    <p className="text-sm">活動時間</p>*/}
          {/*  </div>*/}
          {/*  <p className="text-right text-sm font-medium">*/}
          {/*    <span className="text-xl font-semibold">{ displayNumber(hours) }</span>*/}
          {/*    時間*/}
          {/*    <span className="text-xl font-semibold">{ displayNumber(minutes) }</span>*/}
          {/*    分*/}
          {/*  </p>*/}
          {/*</li>*/}
        </ul>
        <div className="flex flex-wrap self-stretch py-2 justify-start items-center gap-2">
          <div className="justify-start items-center flex pl-2">
            { association.memberAvatars.map((avatar, index) => (
              <Image src={ avatar } alt="参加者" width="40" height="40" className="rounded-full -ml-2" key={ index }/>
            )) }
          </div>
          <p className="text-sm">
            { association.totalMembers - association.memberAvatars.length > 0 && (
              <span className="font-medium">+{ association.totalMembers }人</span>
            ) }
            が活動しました。
          </p>
        </div>
      </div>
    );
  }
};

export default OrganizationInfo;
