import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./css/app.css";
import { NavLink} from 'react-router-dom';
import Kely from "./kely.png";

const Link = () => {
    return(
        <div>
            <NavLink to="/">
                <img src={Kely} class="titanic naked"/>
            </NavLink>
        </div>
    );
}

const Skills = () => {
    return(
        <div id="about">
            <div className="container dad" >
                <div className="row son" >
                    <div className="home ">
                            <div className="grow vertical-tab-1 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <p className="rotateAbout text-justify">Proyects</p>
                            </div>
                    </div>
                    <Link/>
                </div>
                <div id="aboutme" className="row" >
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                            <div  className="grow">
                                <p className="tab-about text-center">Mis habilidades</p> 
                                <div className="">
                                <p className="text-justify introduction">Soy Kely Añamuro, una desarrolladora web front-end jr.</p> 
                                </div>
                                <div>
                                    
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
