import React from "react";
import styles from "../styles/TechCard.module.css";

const TechCard = ({ tech, anim }) => {
    return (
        <div
            data-aos={anim}
            data-aos-duration="1000"
            className={`${styles.TechCard} d-flex justify-content-center align-items-center`}>
            <p className={`${styles.TechText} m-0`}>{tech}</p>
        </div>
    );
};

export default TechCard;
