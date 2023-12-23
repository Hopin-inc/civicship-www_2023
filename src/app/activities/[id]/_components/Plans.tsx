import PlanCarousel from "@/components/elements/PlanCarousel";
import { cn } from "@/lib/utils";
import { PlanOverview } from "@/types/api";

type Props = React.InputHTMLAttributes<HTMLDivElement> & {
  activities: PlanOverview[];
  total: number;
}

const Plans = ({ activities, total, className }: Props) => (
  <section className={ cn(className, "w-full") }>
    <div className="flex items-center gap-4">
      <h2>活動予定</h2>
      <p className="text-sm text-muted-foreground font-medium">{ total }件</p>
    </div>
    <PlanCarousel activities={ activities } className="mt-4"/>
  </section>
);

export default Plans;
