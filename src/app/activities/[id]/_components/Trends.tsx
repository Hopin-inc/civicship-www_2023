import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { displayNumber } from "@/lib/display";
import { ActivityTrendOverview } from "@/types/api";

type Props = React.InputHTMLAttributes<HTMLDivElement> & {
  id: string;
  trends: ActivityTrendOverview;
};

const Trends = ({ id, trends }: Props) => (
  <section className="w-full">
    <div className="flex justify-between items-center">
      <h2>これまでの傾向</h2>
      <Link href={ `/organizations/${ id }/trends` } className={ buttonVariants({ variant: "ghost" }) }>
        くわしく見る
        <ArrowRightCircle size="16" className="ml-1"/>
      </Link>
    </div>
    <ul className="mt-4 grid grid-cols-2 gap-4">
      <li className="p-6 bg-white rounded-2xl">
        <h3 className="text-sm text-muted-foreground">活動曜日・時間帯</h3>
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
);

export default Trends;
