import { headers } from "next/headers";
import Link from "next/link";
import { PropsWithChildren } from "react";
import OrganizationInfo from "@/app/organizations/[id]/_components/OrganizationInfo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Tab = {
  value: string;
  label: string;
};

const tabs: Tab[] = [
  { value: "info", label: "ホーム" },
  { value: "trends", label: "これまでの傾向・活動" },
  // { value: "members", label: "メンバー" },
  { value: "plans", label: "活動予定" },
];

const OrganizationLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const pathname = headers().get("x-url") || "";
  const locations = pathname.split("/");
  const id = locations[2];
  const tab = locations[3];
  console.log(pathname, tab);
  return (
    <div className="w-full max-w-[1160px] px-10 pt-[80px] pb-[160px] flex gap-10 items-start">
      <aside className="min-w-[400px] w-[400px] sticky top-[120px]">
        <OrganizationInfo id={ id }/>
      </aside>
      <div className="flex flex-col gap-16 flex-grow">
        <Tabs defaultValue={ tab } className="relative">
          <TabsList className="gap-2">
            { tabs.map(({ value, label }, index) => (
              <Link href={ `./${ value }` } key={ index }>
                <TabsTrigger value={ value }>
                  { label }
                </TabsTrigger>
              </Link>
            )) }
          </TabsList>
          { tabs.map(({ value }, index) => (
            <TabsContent value={ value } className="mt-8" key={ index }>
              { children }
            </TabsContent>
          )) }
        </Tabs>
      </div>
    </div>
  )
};

export default OrganizationLayout;
