import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./css/app.css";
import { NavLink} from 'react-router-dom';
/*
const MySkills = () => {
    return(
        <div id="skills">
            
        </div>
    );
}*/

const Skills = () => {
    return(
        <div id="skills">
            <div className="container dad" >
                <div className="row son" >
                    <div className="home col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <NavLink to="/" className="grow vertical-tab-1 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                            <p className="tab-title">2</p> 
                            <p className="rotate">Skills</p>
                        </NavLink>
                    </div>
                </div>

                <div id="" className="" >
                    HOLI
                </div>
            </div>
        </div>
    );
}

export default Skills;
