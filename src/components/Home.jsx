import fron from "../images/fronted1.jpg";
import ted from "../images/fronted2.jpg";
import ui from '../images/ui.jpg';
import ux from '../images/ux.jpg'
import Typewriter from "./Typewriter";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2>{t("home.title")}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <Typewriter />
      </div>

      <div className="fact-section">
        <h3 className="home-facts">{t("home.text")}</h3>
        <div className="container">
          <div className="box">
            <div className="imgBx">
              <img src={fron} alt="Frontend Development" />
            </div>
            <div className="content">
              <p dangerouslySetInnerHTML={{ __html: t("home.facts") }}></p>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={ted} alt="Frontend Development" />
            </div>
            <div className="content">
              <p dangerouslySetInnerHTML={{ __html: t("home.facts2") }}></p>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={ui} alt="UI/UX Design" />
            </div>
            <div className="content">
              <p dangerouslySetInnerHTML={{ __html: t("home.facts3") }}></p>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={ux} alt="UI/UX Design" />
            </div>
            <div className="content">
              <p dangerouslySetInnerHTML={{ __html: t("home.facts4") }}>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
