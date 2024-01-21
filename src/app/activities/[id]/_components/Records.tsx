import RecordList from "@/components/elements/RecordList";
import { PastActivityDetail } from "@/types/api";

type Props = React.InputHTMLAttributes<HTMLDivElement> & {
  activities: PastActivityDetail[];
  total: number;
}

const Records = ({ activities, total }: Props) => (
  <section className="w-full">
    <div className="flex items-center gap-4">
      <h2>これまでの活動</h2>
      <p className="text-sm text-muted-foreground font-medium">{ total }件</p>
    </div>
    <RecordList activities={ activities } className="mt-4"/>
  </section>
);

export default Records;
