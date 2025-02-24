import React from "react";
import Card from "react-bootstrap/Card";

const ProjectCard = ({src, repo}) => {
    return (
        <Card>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Link href={repo} target="_blank">
                    {repo}
                </Card.Link>
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;
