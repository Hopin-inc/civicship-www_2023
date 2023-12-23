import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/elements/Carousel";
import { formatDate } from "@/lib/date";
import { cn } from "@/lib/utils";
import { PlanOverview } from "@/types/api";

type Props = React.InputHTMLAttributes<HTMLDivElement> & {
  activities: PlanOverview[];
}

const PlanList = ({ activities, className }: Props) => (
  <ul className={ cn(className, "grid grid-cols-2 gap-6") }>
    { activities.map(({ id, association, address, startsAt }, index) => {
      return (
        <li key={ index }>
          <Link href={ `/activities/${ id }` } className="flex flex-col justify-start items-start gap-4 hover-link">
            <Image src="https://via.placeholder.com/320x320" alt="活動予定" width="320" height="320"
                   className="w-full rounded-lg"/>
            <div className="self-stretch h-[108px] flex-col justify-start items-start gap-4 flex">
              <p className="text-xl font-semibold">{ formatDate(startsAt) }</p>
              <ul className="flex-col justify-start items-start gap-2 flex">
                <li className="justify-start items-center gap-1.5 inline-flex">
                  <MapPin/>
                  <p className="text-base font-normal">{ address }</p>
                </li>
                <li className="justify-start items-center gap-1.5 inline-flex">
                  <Image src={ association.avatar } alt="ロゴ" width="24" height="64" className="rounded"/>
                  <p className="text-base font-normal">{ association.name }</p>
                </li>
              </ul>
            </div>
          </Link>
        </li>
      );
    }) }
  </ul>
);

export default PlanList;
