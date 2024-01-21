import { headers } from "next/headers";
import { getRecords } from "@/api";
import TrendAge from "@/app/organizations/[id]/trends/_components/TrendAge";
import TrendFrequency from "@/app/organizations/[id]/trends/_components/TrendFrequency";
import TrendLocation from "@/app/organizations/[id]/trends/_components/TrendLocation";
import TrendTiming from "@/app/organizations/[id]/trends/_components/TrendTiming";
import RecordList from "@/components/elements/RecordList";

const OrganizationDetailTrend = async () => {
  const pathname = headers().get("x-url") || "";
  const locations = pathname.split("/");
  const id = locations[2];
  const { data: records, total: totalRecords } = await getRecords(id);
  const timingData = [
    [0, 0, 0, 0, 0, 24, 16],
    [0, 0, 0, 0, 0, 20, 8],
    [0, 0, 0, 0, 0, 5, 8],
  ];
  const frequencyData = [
    { name: "月1回", value: 25 },
    { name: "月2~3回", value: 30 },
    { name: "週1回", value: 26 },
    { name: "週2回", value: 15 },
    { name: "週3回", value: 32 },
    { name: "毎日", value: 48 },
  ];
  const locationData = [
    { name: "東京都渋谷区", value: 48 },
    { name: "東京都千代田区", value: 30 },
    { name: "東京都中央区", value: 26 },
    { name: "東京都渋谷区", value: 15 },
  ];
  const ageData = [
    { name: "~10代", value: 25 },
    { name: "20代", value: 30 },
    { name: "30代", value: 26 },
    { name: "40代", value: 15 },
    { name: "50代", value: 32 },
    { name: "60代", value: 48 },
    { name: "70代~", value: 5 },
  ];
  return (
    <div className="flex flex-col gap-16">
      <section className="w-full">
        <h2>これまでの傾向</h2>
        <div className="mt-4 flex flex-col gap-4">
          <section className="px-12 py-8 bg-white rounded-2xl">
            <h3 className="text-lg font-semibold">活動曜日・時間帯</h3>
            <TrendTiming data={ timingData } className="mt-3"/>
          </section>
          <section className="px-12 py-8 bg-white rounded-2xl">
            <h3 className="text-lg font-semibold">活動頻度</h3>
            <TrendFrequency data={ frequencyData }/>
          </section>
          <section className="px-12 py-8 bg-white rounded-2xl">
            <h3 className="text-lg font-semibold">活動場所</h3>
            <TrendLocation data={ locationData }/>
          </section>
          <section className="px-12 py-8 bg-white rounded-2xl">
            <h3 className="text-lg font-semibold">参加者の年齢</h3>
            <TrendAge data={ ageData }/>
          </section>
        </div>
      </section>
      <section className="w-full">
        <div className="flex items-center gap-4">
          <h2>これまでの活動</h2>
          <p className="text-sm text-muted-foreground font-medium">{ totalRecords }件</p>
        </div>
        <RecordList activities={ records } className="mt-4"/>
      </section>
    </div>
  );
};

export default OrganizationDetailTrend;
