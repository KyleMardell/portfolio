import React from "react";
import styles from "../styles/TechCard.module.css";

const TechCard = ({tech}) => {
    return (
        <div className={`${styles.TechCard} d-flex justify-content-center align-items-center`}>
            <p className={`${styles.TechText} m-0`}>{tech}</p>
        </div>
    );
};

export default TechCard;
