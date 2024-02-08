import { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { getOrganization } from "@/api";
import OrganizationInfo from "@/app/organizations/[id]/_components/OrganizationInfo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Tab = {
  value: string;
  label: string;
};

const tabs: Tab[] = [
  { value: "info", label: "ホーム" },
  // { value: "trends", label: "これまでの傾向・活動" },
  { value: "members", label: "メンバー" },
  { value: "plans", label: "活動予定" },
];

export async function generateMetadata(): Promise<Metadata> {
  const pathname = headers().get("x-url") || "";
  const locations = pathname.split("/");
  const id = locations[2];
  const tab = locations[3];
  const association = await getOrganization(id);
  const tabItem = tabs.find(t => t.value === tab);
  const title = tab === "info" || !tabItem
    ? `${ association?.name }`
    : `${ tabItem?.label } - ${ association?.name }`;
  return {
    title,
    description: association?.description,
  };
}

const OrganizationLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const pathname = headers().get("x-url") || "";
  const locations = pathname.split("/");
  const id = locations[2];
  const tab = locations[3];
  return (
    <div className="w-full md:max-w-[1160px] px-6 md:px-10 pt-6 md:pt-[80px] pb-12 md:pb-[160px] flex flex-col md:flex-row gap-10 items-start">
      <aside className="w-full md:min-w-[400px] md:w-[400px] md:sticky top-[120px]">
        <OrganizationInfo id={ id }/>
      </aside>
      <div className="w-full flex flex-col gap-16 flex-grow">
        <Tabs defaultValue={ tab } className="sticky md:relative">
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
