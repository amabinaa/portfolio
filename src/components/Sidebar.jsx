import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Sidebar toggled:", !isOpen); 
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <h2>{t("sidebar.menu")}</h2>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                {t("sidebar.main")}
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                {t("sidebar.me")}
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setIsOpen(false)}>
                {t("sidebar.projects")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {isOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default Sidebar;
