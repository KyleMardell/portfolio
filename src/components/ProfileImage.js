import React from "react";
import profileHeadshot from "../assets/headshot.png";

const ProfileImage = (height = 100) => {
    return (
        <span>
            <img
                src={profileHeadshot}
                height={height}
                width={height}
                alt="Profile headshot"
            />
        </span>
    );
};

export default ProfileImage;