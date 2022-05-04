import { Grid } from "@mui/material";
import React from "react";
import Button from "../button/Button";
import "./ProjectCard.css";
import tesla from '../../images/tesla-clone.PNG'


const ProjectCard = (props) => {
  return (
    <div className="projectCardMain">
        
            <div className="projectCardBody">
                <Grid container>
                    <Grid item md={8}>
                        <div className="cardVerticalAlign">
                            <div className="projectCardHeading">{props.heading}</div>
                            <div className="projectCardDesc">{props.desc}</div>

                            <div>
                            <Button title="Live Demo" link={props.link} />
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <div className="projectDiv">

                            <div className="teslaImg">
                                <img src={props.img}  width="100%"/>
                            </div>
                            
                        </div>
                    </Grid>
                </Grid>
            </div>
      
    </div>
  );
};

export default ProjectCard;
