import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project }) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(project.imageSrc)}
        alt={`Image of ${project.title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{project.title}</h3>
      <p className={`${styles.description} ${project.descriptionClass ? styles[project.descriptionClass] : ''}`}>
        {project.description}
      </p>
      <ul className={styles.skills}>
        {project.skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={project.source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
