import { Calendar, User } from "lucide-react";
import { displayNumber } from "@/lib/display";

type Props = React.InputHTMLAttributes<HTMLDivElement> & {
  participants: number;
  activityCount: number;
  activityHours: number;
};

const RecordSummary = ({ participants, activityCount }: Props) => {
  // const [hours, minutes] = convertH2HM(activityHours);
  return (
    <section className="w-full mt-8">
      <p className="text-lg font-bold">これまでの記録</p>
      <ul className="w-full p-6 mt-2 bg-white rounded-2xl flex flex-col gap-2">
        <li className="self-stretch justify-between items-center inline-flex">
          <div className="justify-start items-center gap-2 flex">
            <User size="16"/>
            <p className="text-sm">参加者</p>
          </div>
          <p className="text-right text-sm font-medium">
            <span className="text-xl font-semibold">{ displayNumber(participants) }</span>
            人
          </p>
        </li>
        <li className="self-stretch justify-between items-center inline-flex">
          <div className="justify-start items-center gap-2 flex">
            <Calendar size="16"/>
            <p className="text-sm">活動回数</p>
          </div>
          <p className="text-right text-sm font-medium">
            <span className="text-xl font-semibold">{ displayNumber(activityCount) }</span>
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
    </section>
  )
};

export default RecordSummary;
