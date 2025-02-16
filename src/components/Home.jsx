import fron from "../images/fronted1.jpg";
import ted from "../images/fronted2.jpg";
import ui from '../images/ui.jpg';
import ux from '../images/ux.jpg'
import { Link } from "react-router-dom";
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
              <p>
                Did you know? Over <strong>70% of users</strong> judge a
                website's credibility based on its design and performance.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={ted} alt="Frontend Development" />
            </div>
            <div className="content">
              <p>
                JavaScript is the most commonly used programming language, with
                over <strong>97% of websites</strong> using it.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={ui} alt="UI/UX Design" />
            </div>
            <div className="content">
              <p>
                Fun fact: A well-designed user interface can increase user
                retention by up to <strong>200%</strong>.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={ux} alt="UI/UX Design" />
            </div>
            <div className="content">
              <p>
                Fun fact: A well-designed user interface can increase user
                retention by up to <strong>200%</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
