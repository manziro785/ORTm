// import style from "./mainPage.module.css";
import "../../common.css";
import Template from "../../components/common/template";
import AboutUs from "../../components/mainPage/aboutUs/aboutUs";
import Banner from "../../components/mainPage/banner/banner";
import Cards from "../../components/mainPage/cards/cards";

export default function MainPage() {
  return (
    <div>
      <Template>
        <div className="wrapper_component">
          <Banner />
          <AboutUs />
          <Cards />
        </div>
      </Template>
    </div>
  );
}
