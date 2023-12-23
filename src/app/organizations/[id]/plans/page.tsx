import { getPlans } from "@/api";
import PlanList from "@/components/elements/PlanList";

const OrganizationDetailPlans = async () => {
  const { data } = await getPlans();
  return (
    <section className="w-full">
      <PlanList activities={ data } className="mt-4"/>
    </section>
  );
};

export default OrganizationDetailPlans;
