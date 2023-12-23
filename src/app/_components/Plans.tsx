import { getPlans } from "@/api";
import AsyncNumberBadge from "@/components/elements/AsyncNumberBadge";
import PlanCarousel from "@/components/elements/PlanCarousel";

const Plans = async () => {
  const { total, data } = await getPlans();
  return (
    <section id="plans" className="flex flex-col py-4">
      <div className="flex flex-row items-center gap-3">
        <h2>活動予定</h2>
        <AsyncNumberBadge fetchData={ async () => total }/>
      </div>
      <p className="mt-4">トライアルパートナーが、civicshipにご登録いただいている活動予定です。</p>
      <PlanCarousel activities={ data }/>
    </section>
  );
};

export default Plans;
