import { Calendar, Link as LinkIcon, MapPin, ShieldCheck, Tag } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { getOrganizationDetail, getOrganizationTrends, getPlans, getRecords } from "@/api";
import PlanList from "@/components/elements/PlanList";
import RecordList from "@/components/elements/RecordList";
import { formatDate } from "@/lib/date";
import { displayNumber } from "@/lib/display";

const OrganizationDetailInfo = async () => {
  const pathname = headers().get("x-url") || "";
  const locations = pathname.split("/");
  const id = locations[2];
  const [
    association,
    trends,
    { data: plans, total: totalPlans },
    { data: records, total: totalRecords },
  ] = await Promise.all([
    getOrganizationDetail(id),
    getOrganizationTrends(id),
    getPlans(id),
    getRecords(id),
  ]);
  if (association && trends) {
    return (
      <div className="flex flex-col gap-16">
        <section className="px-6 py-4 bg-white rounded-2xl flex flex-col justify-start items-center">
          <dl className="information-card-table">
            <dt>
              <Tag size="16" className="text-muted-foreground"/>
              <p className="text-sm text-muted-foreground">活動分野</p>
            </dt>
            <dd>
              { association.targets?.length
                ? (
                  <ul className="flex flex-wrap gap-2">
                    { association.targets?.map((target, index) => (
                      <li className="px-3 py-0.5 rounded-full bg-accent" key={ index }>{ target }</li>
                    )) }
                  </ul>
                )
                : <p>—</p>
              }
            </dd>
            <dt>
              <Calendar size="16" className="text-muted-foreground"/>
              <p className="text-sm text-muted-foreground">設立日</p>
            </dt>
            <dd>
              <p>{ formatDate(association.establishedAt) }</p>
            </dd>
            { association.homepage && (
              <>
                <dt>
                  <LinkIcon size="16" className="text-muted-foreground"/>
                  <p className="text-sm text-muted-foreground">Webサイト</p>
                </dt>
                <dd>
                  <Link href={ association.homepage } target="_blank">{ association.homepage }</Link>
                </dd>
              </>
            ) }
            <dt>
              <MapPin size="16" className="text-muted-foreground"/>
              <p className="text-sm text-muted-foreground">所在地</p>
            </dt>
            <dd>
              <p>{ association.address }</p>
            </dd>
            <dt>
              <ShieldCheck size="16" className="text-muted-foreground"/>
              <p className="text-sm text-muted-foreground">所轄庁</p>
            </dt>
            <dd>
              <p>{ association.authorizedBy }</p>
            </dd>
          </dl>
        </section>
        <section className="w-full">
          <div className="flex justify-between items-center">
            <h2>これまでの傾向</h2>
            {/*<Link href="./trends" className={ buttonVariants({ variant: "ghost" }) }>*/ }
            {/*  くわしく見る*/ }
            {/*  <ArrowRightCircle size="16" className="ml-1"/>*/ }
            {/*</Link>*/ }
          </div>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="p-6 bg-white rounded-2xl">
              <h3 className="text-sm text-muted-foreground">活動曜日</h3>
              <div className="mt-2">
                { trends.timing.value && (
                  <p className="text-sm font-medium">
                    <span className="text-2xl font-bold">{ trends.timing.value }</span>
                    が多い
                  </p>
                ) }
                <p className="text-sm text-muted-foreground">
                  { trends.timing.percentage !== null ? `${ displayNumber(trends.timing.percentage * 100) }%` : "—" }
                </p>
              </div>
            </li>
            <li className="p-6 bg-white rounded-2xl">
              <h3 className="text-sm text-muted-foreground">活動頻度</h3>
              <div className="mt-2">
                { trends.frequency.value && (
                  <p className="text-sm font-medium">
                    <span className="text-2xl font-bold">{ trends.frequency.value }</span>
                    が多い
                  </p>
                ) }
                <p className="text-sm text-muted-foreground">
                  { trends.frequency.percentage !== null ? `${ displayNumber(trends.frequency.percentage * 100) }%` : "—" }
                </p>
              </div>
            </li>
            <li className="p-6 bg-white rounded-2xl">
              <h3 className="text-sm text-muted-foreground">活動場所</h3>
              <div className="mt-2">
                { trends.location.value && (
                  <p className="text-sm font-medium">
                    <span className="text-2xl font-bold">{ trends.location.value }</span>
                    が多い
                  </p>
                ) }
                <p className="text-sm text-muted-foreground">
                  { trends.location.percentage !== null ? `${ displayNumber(trends.location.percentage * 100) }%` : "—" }
                </p>
              </div>
            </li>
            <li className="p-6 bg-white rounded-2xl">
              <h3 className="text-sm text-muted-foreground">年齢</h3>
              <div className="mt-2">
                { trends.age.value && (
                  <p className="text-sm font-medium">
                    <span className="text-2xl font-bold">{ trends.age.value }</span>
                    が多め
                  </p>
                ) }
                <p className="text-sm text-muted-foreground">
                  { trends.age.percentage !== null ? `${ displayNumber(trends.age.percentage * 100) }%` : "—" }
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section className="w-full">
          <div className="flex items-center gap-4">
            <h2>これまでの活動</h2>
            <p className="text-sm text-muted-foreground font-medium">{ totalRecords }件</p>
          </div>
          <RecordList activities={ records } className="mt-4"/>
        </section>
        { plans.length > 0 && (
          <section className="w-full">
            <div className="flex items-center gap-4">
              <h2>活動予定</h2>
              <p className="text-sm text-muted-foreground font-medium">{ totalPlans }件</p>
            </div>
            <PlanList activities={ plans } className="mt-4"/>
          </section>
        ) }
      </div>
    );
  }
};

export default OrganizationDetailInfo;
