import React from "react";
import profileHeadshot from "../assets/headshot.png";
import { Image } from "react-bootstrap";

const ProfileImage = () => {
    return (
        <span>
            <Image fluid
                src={profileHeadshot}
                alt="Profile headshot"
            />
        </span>
    );
};

export default ProfileImage;