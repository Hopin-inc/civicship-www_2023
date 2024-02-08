import Contact from "@/app/_components/Contact";
import FirstView from "@/app/_components/FirstView";
import Organizations from "@/app/_components/Organizations";
import Plans from "@/app/_components/Plans";
import Records from "@/app/_components/Records";
import Recruitment from "@/app/_components/Recruitment";
import "@/app/page.scss";

const Home = () => (
  <>
    <FirstView/>
    <div className="flex flex-col w-full max-w-[960px] px-6 md:px-10 pb-20 gap-20 home">
      {/*<Now/>*/}
      <Organizations/>
      <Plans/>
      <Records/>
      <Recruitment/>
      <Contact/>
    </div>
  </>
);

export default Home;
