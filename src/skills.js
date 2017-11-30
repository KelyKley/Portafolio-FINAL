import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./css/app.css";
import { NavLink} from 'react-router-dom';
import Kely from "./pink.png";

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
                                <p className="rotateAbout text-justify">Skills</p>
                            </div>
                    </div>
                    <Link/>
                </div>
                <div id="aboutme" className="row" >
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                            <div  className="grow">
                                <p className="tab-about text-center">Mis habilidades</p> 
                                <div>
                                    <div class="skilll col-md-4 col-xs-6">
                                        <div class="progress blue">
                                            <span class="progress-left">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar"></span>
                                            </span>
                                            
                                            <div class="progress-value">HTML</div>
                                        </div>
                                    </div>
                                    <div class="skilll col-md-4 col-xs-6">
                                        <div class="progress yellow">
                                            <span class="progress-left">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <div class="progress-value">JS</div>
                                        </div>
                                    </div>
                                    <div class="skilll col-md-4 col-xs-6">
                                        <div class="progress yellow">
                                            <span class="progress-left">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <div class="progress-value">CSS</div>
                                        </div>
                                    </div>
                                    <div class="skilll col-md-4 col-xs-6">
                                        <div class="progress yellow">
                                            <span class="progress-left">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <div class="progress-value">JQuery</div>
                                        </div>
                                    </div>
                                    <div class="skilll col-md-4 col-xs-6">
                                        <div class="progress yellow">
                                            <span class="progress-left">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <div class="progress-value">Bootstrap</div>
                                        </div>
                                    </div>
                                    <div class="skilll col-md-4 col-xs-6">
                                        <div class="progress yellow">
                                            <span class="progress-left">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <div class="progress-value">ReactJS</div>
                                        </div>
                                    </div>
                                    <div class="skilll col-md-4 col-xs-6">
                                        <div class="progress blue">
                                            <span class="progress-left">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar"></span>
                                            </span>
                                            
                                            <div class="progress-value">Redux</div>
                                        </div>
                                    </div>
                                    <div class="skilll col-md-4 col-xs-6">
                                        <div class="progress blue">
                                            <span class="progress-left">
                                                <span class="progress-bar"></span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar"></span>
                                            </span>
                                            
                                            <div class="progress-value">Github</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
