import React from "react";
import styles from "../styles/TechCard.module.css";

const TechCard = ({tech, anim}) => {
    return (
        <div className={`${styles.TechCard} d-flex justify-content-center align-items-center`} data-aos={`flip-${anim}`} data-aos-duration="1400">
            <p className={`${styles.TechText} m-0`}>{tech}</p>
        </div>
    );
};

export default TechCard;
