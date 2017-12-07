import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./css/app.css";
import { NavLink} from 'react-router-dom';
import Kely from "./pink.png";

const Link = () => {
    return(
        <div>
            <NavLink to="/">
                <img src={Kely} class="house naked"/>
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
                                <p className="rotatePro rotate rotateAbout text-justify">Skills</p>
                            </div>
                    </div>
                    <Link/>
                </div>

                <div id="aboutme" className="row col-lg-9 col-md-9 col-sm-9 col-xs-9 aboutme-scroll" >
                    <div className="">
                            <div  className="">
                                <p className="tab-about text-center">Mis habilidades</p>
                                <hr/> 
                                <div>
                                <div id="skills">
                                    <ul>
                                        <li>HTML5</li>
                                        <div class="box">
                                        <div id="one"></div>
                                        </div>
                                        <li>Javascript</li>
                                        <div class="box">
                                        <div id="two"></div>
                                        </div>
                                        <li>CSS3</li>
                                        <div class="box">
                                        <div id="three"></div>
                                        </div>
                                        <li>ReactJS</li>
                                        <div class="box">
                                        <div id="four"></div>
                                        </div>
                                        <li>JQuery</li>
                                        <div class="box">
                                        <div id="five"></div>
                                        </div>
                                        <li>Git</li>
                                        <div class="box">
                                        <div id="six"></div>
                                        </div>
                                        <li>GitHub</li>
                                        <div class="box">
                                        <div id="three"></div>
                                        </div>
                                        <li>Bootstrap</li>
                                        <div class="box">
                                        <div id="seven"></div>
                                        </div>
                                        <li>Firebase</li>
                                        <div class="box">
                                        <div id="eight"></div>
                                        </div>
                                        <li>SASS</li>
                                        <div class="box">
                                        <div id="nine"></div>
                                        </div>
                                        <li>Wordpress</li>
                                        <div class="box">
                                        <div id="four"></div>
                                        </div>
                                    </ul>
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
