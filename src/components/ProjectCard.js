import React from "react";
import styles from "../styles/ProjectCard.module.css";

const ProjectCard = ({ src, repo }) => {
    return (
        <a href={repo} target="_blank" rel="noopener noreferrer" className={styles.ProjectCard} data-aos="fade-up" data-aos-duration="1100">
            <div className={styles.ProjectImageContainer}>
                <img src={src} alt="Project preview" className={styles.ProjectImage} />
            </div>
        </a>
    );
};

export default ProjectCard;
