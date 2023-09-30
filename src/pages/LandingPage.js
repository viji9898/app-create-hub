import { Divider } from "antd";

import { Hero } from "../components/landingPage/hero";
import { Mission } from "../components/landingPage/mission";
import { ProjectCards } from "../components/landingPage/projectCards";
import { TechTalent } from "../components/landingPage/techTalent";

import { Footer } from "../components/navigation/footer";
import { DynamicMetaTags } from "../utils/dynamicMetaTags";

export const LandingPage = ({ helloWorld }) => {
  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <DynamicMetaTags ogTitle={`Tech For Good`} ogImage={""} />
      <div>
        <Hero helloWorld={helloWorld} />
        <Divider />
        <Mission />
        <Divider />
        <TechTalent />
        <Divider />
        <ProjectCards />
        <Footer />
      </div>
    </div>
  );
};
