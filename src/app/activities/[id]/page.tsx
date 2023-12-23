import { ExternalLink } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import {
  getActivityInfo,
  getOrganizationDetail,
  getOrganizationTrends,
  getPlans,
  getRecords
} from "@/api";
import Organization from "@/app/activities/[id]/_components/Organization";
import Plans from "@/app/activities/[id]/_components/Plans";
import RecordSummary from "@/app/activities/[id]/_components/RecordSummary";
import Records from "@/app/activities/[id]/_components/Records";
import Summary from "@/app/activities/[id]/_components/Summary";
import Thumbnails from "@/app/activities/[id]/_components/Thumbnails";
import Trends from "@/app/activities/[id]/_components/Trends";
import { buttonVariants } from "@/components/ui/button";
import { applyForm } from "@/constants/url";
import { cn } from "@/lib/utils";

const ActivityDetail = async () => {
  const pathname = headers().get("x-url") || "";
  const locations = pathname.split("/");
  const id = locations[2];
  const activity = await getActivityInfo(id);
  if (!activity) {
    return;
  }
  const organizationId = activity?.associationId;
  const [
    association,
    trends,
    { data: plans, total: totalPlans },
    { data: records, total: totalRecords },
  ] = await Promise.all([
    getOrganizationDetail(organizationId),
    getOrganizationTrends(organizationId),
    getPlans(organizationId),
    getRecords(organizationId),
  ]);
  if (!association || !trends) {
    return;
  }

  return (
    <div className="w-full max-w-[960px] px-10 pb-[160px]">
      <Thumbnails thumbnails={ activity.thumbnails }/>
      <div className="flex gap-8 items-start">
        <div className="flex flex-col gap-16 flex-grow">
          <Summary/>
          <Organization association={ association }/>
          { trends && <Trends id={ association.id } trends={ trends }/> }
          <Records activities={ records } total={ totalRecords }/>
        </div>
        <aside className="min-w-[280px] w-[280px] sticky top-[120px]">
          <Link href={ applyForm } target="_blank"
                className={ cn(buttonVariants({ size: "lg" }), "rounded-full w-full") }>
            話を聞きたい
            <ExternalLink size="16" className="ml-1"/>
          </Link>
          <RecordSummary/>
        </aside>
      </div>
      <Plans activities={ plans } total={ totalPlans } className="mt-20"/>
    </div>
  )
};

export default ActivityDetail;
