import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <h1>{t("header.title")}</h1>
      <div className="switch">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
