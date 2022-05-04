import { Grid } from "@mui/material";
import React from "react";
import Button from "../button/Button";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    // <div className="projectCardMain">
        
            <div className="projectCardBody">
                <Grid container>
                    <Grid item md={8}>
                        <div className="projectCardHeading">{props.heading}</div>
                        <div className="projectCardDesc">{props.desc}</div>

                        <div>
                        <Button title="Live Demo" />
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="projectDiv"></div>
                    </Grid>
                </Grid>
            </div>
      
    // </div>
  );
};

export default ProjectCard;
