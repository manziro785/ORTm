// import style from "./mainPage.module.css";
import "../../common.css";
import Template from "../../components/common/template";
import AboutUs from "../../components/mainPage/aboutUs/aboutUs";
import Banner from "../../components/mainPage/banner/banner";
import Cards from "../../components/mainPage/cards/cards";
import Grades from "../../components/mainPage/grades/Grades";
import HowItWorks from "../../components/mainPage/howItWorks/HowItWorks";
import Subbuner from "../../components/mainPage/subbuner/subbuner.component";

export default function MainPage() {
  return (
    <div>
      {/* <Template> */}
      <div className="wrapper_component">
        <Banner />
        <Grades />
        <HowItWorks />
        <Subbuner />
        <AboutUs />
        <Cards />
      </div>
      {/* </Template> */}
    </div>
  );
}
