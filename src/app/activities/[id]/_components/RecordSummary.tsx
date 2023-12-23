import { Calendar, Clock, User } from "lucide-react";

const RecordSummary = () => (
  <section className="w-full mt-8">
    <p className="text-lg font-bold">これまでの記録</p>
    <ul className="mt-2 p-6 bg-white rounded-2xl flex flex-col gap-2">
      <li className="self-stretch justify-between items-center inline-flex">
        <div className="justify-start items-center gap-2 flex">
          <User size="16"/>
          <p className="text-sm">参加者</p>
        </div>
        <p className="text-right text-sm font-medium">
          <span className="text-xl font-semibold">8</span>
          人
        </p>
      </li>
      <li className="self-stretch justify-between items-center inline-flex">
        <div className="justify-start items-center gap-2 flex">
          <Calendar size="16"/>
          <p className="text-sm">活動回数</p>
        </div>
        <p className="text-right text-sm font-medium">
          <span className="text-xl font-semibold">13</span>
          回
        </p>
      </li>
      <li className="self-stretch justify-between items-center inline-flex">
        <div className="justify-start items-center gap-2 flex">
          <Clock size="16"/>
          <p className="text-sm">活動時間</p>
        </div>
        <p className="text-right text-sm font-medium">
          <span className="text-xl font-semibold">37</span>
          時間
        </p>
      </li>
    </ul>
  </section>
);

export default RecordSummary;
