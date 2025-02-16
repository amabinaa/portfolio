import { useTranslation } from "react-i18next";
import { FaTelegram, FaInstagram, FaLinkedin } from "react-icons/fa"; 
import { DiHtml5, DiCss3, DiJavascript, DiReact} from "react-icons/di";
import { SiTypescript, SiVuedotjs } from "react-icons/si";
import me from '../images/me.jpg'

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section">
      <h2>{t("about.title")}</h2>
      <img src={me} alt="" />
      <p>{t("about.description")} </p>
      <ul>
        <li>{t("about.email")}</li>
        <li>{t("about.phone")}</li>
      </ul>

      <div className="skills-section">
        <h3>{t("about.skills")}</h3>
        <div className="skills-grid">
          <div className="skill">
            <DiHtml5 className="skill-icon" />
            <span>HTML</span>
            <p className="skill-description">{t("about.html")}</p>
          </div>
          <div className="skill">
            <DiCss3 className="skill-icon" />
            <span>CSS</span>
            <p className="skill-description">{t("about.css")}</p>
          </div>
          <div className="skill">
            <DiJavascript className="skill-icon" />
            <span>JavaScript</span>
            <p className="skill-description">{t("about.javascript")}</p>
          </div>
          <div className="skill">
            <SiTypescript className="skill-icon" />
            <span>TypeScript</span>
            <p className="skill-description">{t("about.typescript")}</p>
          </div>
          <div className="skill">
            <SiVuedotjs className="skill-icon" />
            <span>Vue</span>
            <p className="skill-description">{t("about.vue")}</p>
          </div>
          <div className="skill">
            <DiReact className="skill-icon" />
            <span>React</span>
            <p className="skill-description">{t("about.react")}</p>
          </div>
        </div>
      </div>

      <div className="social-links">
        <a
          href="https://t.me/amabinaa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <FaTelegram className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/amabinaa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/sabina-burkhanova-26a7751bb"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="social-icon" />
        </a>
      </div>
    </section>
  );
};

export default About;
