import { Calendar, MapPin, UserCircle } from "lucide-react";
import Image from "next/image";

const Summary = () => (
  <section className="w-full">
    <h2>活動概要</h2>
    <div className="mt-4 p-6 bg-white rounded-2xl flex flex-col justify-start items-center">
      <dl className="information-card-table">
        <dt>
          <Calendar size="16" className="text-muted-foreground"/>
          <p className="text-sm text-muted-foreground">日時</p>
        </dt>
        <dd>
          <p>2023年11月18日(土) 8:00~12:00</p>
        </dd>
        <dt>
          <UserCircle size="16" className="text-muted-foreground"/>
          <p className="text-sm text-muted-foreground">参加者</p>
        </dt>
        <dd className="items-center gap-2">
          <div className="justify-start items-center flex">
            <Image src="https://via.placeholder.com/40x40" alt="参加者" width="40" height="40"
                   className="rounded-[120px]"/>
            <Image src="https://via.placeholder.com/40x40" alt="参加者" width="40" height="40"
                   className="rounded-[120px]"/>
            <Image src="https://via.placeholder.com/40x40" alt="参加者" width="40" height="40"
                   className="rounded-[120px]"/>
            <Image src="https://via.placeholder.com/40x40" alt="参加者" width="40" height="40"
                   className="rounded-[120px]"/>
          </div>
          <p className="text-sm">
            <span className="text-base font-medium">+7人</span>
            が参加予定です。
          </p>
        </dd>
        <dt>
          <MapPin size="16" className="text-muted-foreground"/>
          <p className="text-sm text-muted-foreground">場所</p>
        </dt>
        <dd>
          <p>東京都目黒区2-6-3</p>
        </dd>
      </dl>
    </div>
  </section>
);

export default Summary;
