import { Calendar, User } from "lucide-react";
import Link from "next/link";
import { getOrganizations } from "@/api";
import { formatDate } from "@/lib/date";
import { joinTexts } from "@/lib/display";

const Organizations = async () => {
  const organizations = await getOrganizations();
  return (
    <section id="organizations" className="flex flex-col py-4">
      <h2>利用団体</h2>
      <p className="mt-4">
        civicshipの目指すところに共感いただき、ご協力していただいているトライアルパートナーのご紹介です。
      </p>
      <ul className="w-full mt-6 grid grid-cols-2 gap-6">
        { organizations.map(({ engagement, ...organization }, index) => {
          // const [hours, minutes] = convertH2HM(engagement.activityHour);
          return (
            <li className="bg-white rounded-lg" key={ index }>
              <Link href={ `/organizations/${ organization.id }` }
                    className="w-full p-8 flex-col justify-start items-center inline-flex hover-link">
                <div className="self-stretch h-[120px] bg-image-contain"
                     style={ { backgroundImage: `url(${ organization.logo })` } }/>
                <div className="mt-4 self-start">
                  <h3 className="text-lg font-medium">
                    { joinTexts(organization.prefix, organization.name, organization.suffix) }
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    { formatDate(organization.signUpAt, "YYYY年M月D日") }からcivicshipを利用しています。
                  </p>
                </div>
                <ul className="mt-6 flex flex-col justify-start items-center self-stretch gap-2">
                  <li className="self-stretch justify-between items-center inline-flex">
                    <div className="justify-center items-start gap-2 flex">
                      <User/>
                      <p>参加者</p>
                    </div>
                    <p className="text-right text-sm font-medium">
                      <span className="text-2xl font-semibold">{ engagement.participants }</span>
                      人
                    </p>
                  </li>
                  <li className="self-stretch justify-between items-center inline-flex">
                    <div className="justify-center items-start gap-2 flex">
                      <Calendar/>
                      <p>活動回数</p>
                    </div>
                    <p className="text-right text-sm font-medium">
                      <span className="text-2xl font-semibold">{ engagement.activityCount }</span>
                      回
                    </p>
                  </li>
                  {/*<li className="self-stretch justify-between items-center inline-flex">*/}
                  {/*  <div className="justify-center items-start gap-2 flex">*/}
                  {/*    <Timer/>*/}
                  {/*    <p>活動時間</p>*/}
                  {/*  </div>*/}
                  {/*  <p className="text-right text-sm font-medium">*/}
                  {/*    <span className="text-2xl font-semibold">{ displayNumber(hours) }</span>*/}
                  {/*    時間*/}
                  {/*    <span className="text-2xl font-semibold">{ displayNumber(minutes) }</span>*/}
                  {/*    分*/}
                  {/*  </p>*/}
                  {/*</li>*/}
                </ul>
              </Link>
            </li>
          )
        }) }
      </ul>
    </section>
  )
};


export default Organizations;
