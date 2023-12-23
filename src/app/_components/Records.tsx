import Link from "next/link";
import { getRecords } from "@/api";
import AsyncNumberBadge from "@/components/elements/AsyncNumberBadge";
import RecordList from "@/components/elements/RecordList";
import { landingPage } from "@/constants/url";

const Records = async () => {
  const { data, total } = await getRecords();
  return (
    <section id="records" className="flex flex-col py-4">
      <div className="flex flex-row items-center gap-3">
        <h2>これまでの活動</h2>
        <AsyncNumberBadge fetchData={ async () => total }/>
      </div>
      <p className="mt-4">
        ボランティアの皆様にご協力いただき、モバイルアプリのcivicshipを通じて計測された、ボランティア活動を表示しています。アプリの詳細は
        <Link href={ landingPage } target="_blank" className="text-primary-gradient font-bold hover-link">こちら</Link>
        からご覧ください。
      </p>
      <RecordList activities={ data } className="mt-6"/>
    </section>
  );
};

export default Records;
