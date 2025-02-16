import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/amabinaa/repos")
      .then((response) => {
       
        const reposWithThumbnails = response.data.map((repo) => ({
          ...repo,
          thumbnail: `https://raw.githubusercontent.com/amabinaa/${repo.name}/main/thumbnail.png`, 
        }));
        setRepos(reposWithThumbnails);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке репозиториев:", error);
      });
  }, []);

  return (
    <section>
      <h2>{t("projects.title")}</h2>
      <div className="projects-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="project-card">
            {repo.thumbnail && (
              <img
                src={repo.thumbnail}
                alt={`Thumbnail for ${repo.name}`}
                className="project-thumbnail"
              />
            )}
            <h3>{repo.name}</h3>
            <p>{repo.description || t("projects.desc")}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {t("projects.link")}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
