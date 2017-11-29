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

const Projects = () => {
    return(
        <div id="about">
            <div className="container dad" >
                <div className="row son" >
                    <div className="home ">
                        <div to="/home" className="grow vertical-tab-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <p className="rotatePro rotate rotateAbout text-justify">Projects</p>
                        </div>
                    </div>
                    <Link/>
                </div>
                <div id="aboutme" className="row" >
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                            <div  className="grow">
                                <p className="tab-about text-center">About me</p> 
                                <hr/>
                                <div class="main"> 
                <div class="view view-tenth">
                    <img src="http://upload.enewsworld.net/News/Contents/20170710/16024399.jpg" />
                    <div class="mask">
                        <h2>Hover Style #10</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <a href="#" class="info">Read More</a>
                    </div>
                </div>
                <div class="view view-tenth">
                    <img src="images/2.jpg" />
                    <div class="mask">
                        <h2>Hover Style #10</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <a href="#" class="info">Read More</a>
                    </div>
                </div>
                <div class="view view-tenth">
                    <img src="images/1.jpg" />
                    <div class="mask">
                        <h2>Hover Style #10</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <a href="#" class="info">Read More</a>
                    </div>
                </div>
                <div class="view view-tenth">
                    <img src="images/7.jpg" />
                    <div class="mask">
                        <h2>Hover Style #10</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        <a href="#" class="info">Read More</a>
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

export default Projects;

/*
<section id="portfolio" class="container">
                                    <div class="row">
                                        <div class="col-xs-12 col-md-9">
                                            <h2 class="visible-xs visible-sm">My Portfolio</h2>
                                            <div class="row">
                                                <div class="col-xs-12 col-sm-4">
                                                    <div class="panel panel-default">
                                                        <div class="panel-heading">
                                                            <h4 class="panel-title">Project 1</h4>
                                                        </div>
                                                        <div class="panel-body">
                                                            <img class="img-responsive" src="http://placehold.it/1440x900" alt="Project 1 image"/>
                                                            <p>Short project description goes here...</p>
                                                        </div>
                                                        <div class="panel-footer">
                                                            <a class="btn btn-default btn-block" href="#">
                                                                Check it out <i class="fa fa-arrow-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-4">
                                                    <div class="panel panel-default">
                                                        <div class="panel-heading">
                                                            <h4 class="panel-title">Project 2</h4>
                                                        </div>
                                                        <div class="panel-body">
                                                            <img class="img-responsive" src="http://placehold.it/1440x900" alt="Project 2 image"/>
                                                            <p>Short project description goes here...</p>
                                                        </div>
                                                        <div class="panel-footer">
                                                            <a class="btn btn-default btn-block" href="#">
                                                                Check it out <i class="fa fa-arrow-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-4">
                                                    <div class="panel panel-default">
                                                        <div class="panel-heading">
                                                            <h4 class="panel-title">Project 3</h4>
                                                        </div>
                                                        <div class="panel-body">
                                                            <img class="img-responsive" src="http://placehold.it/1440x900" alt="Project 3 image"/>
                                                            <p>Short project description goes here...</p>
                                                        </div>
                                                        <div class="panel-footer">
                                                            <a class="btn btn-default btn-block" href="#">
                                                                Check it out <i class="fa fa-arrow-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-4">
                                                    <div class="panel panel-default">
                                                        <div class="panel-heading">
                                                            <h4 class="panel-title">Project 4</h4>
                                                        </div>
                                                        <div class="panel-body">
                                                            <img class="img-responsive" src="http://placehold.it/1440x900" alt="Project 4 image"/>
                                                            <p>Short project description goes here...</p>
                                                        </div>
                                                        <div class="panel-footer">
                                                            <a class="btn btn-default btn-block" href="#">
                                                                Check it out <i class="fa fa-arrow-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-4">
                                                    <div class="panel panel-default">
                                                        <div class="panel-heading">
                                                            <h4 class="panel-title">Project 5</h4>
                                                        </div>
                                                        <div class="panel-body">
                                                            <img class="img-responsive" src="http://placehold.it/1440x900" alt="Project 5 image"/>
                                                            <p>Short project description goes here...</p>
                                                        </div>
                                                        <div class="panel-footer">
                                                            <a class="btn btn-default btn-block" href="#">
                                                                Check it out <i class="fa fa-arrow-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-4">
                                                    <div class="panel panel-default">
                                                        <div class="panel-heading">
                                                            <h4 class="panel-title">Project 6</h4>
                                                        </div>
                                                        <div class="panel-body">
                                                            <img class="img-responsive" src="http://placehold.it/1440x900" alt="Project 6 image"/>
                                                            <p>Short project description goes here...</p>
                                                        </div>
                                                        <div class="panel-footer">
                                                            <a class="btn btn-default btn-block" href="#">
                                                                Check it out <i class="fa fa-arrow-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="secDiv"/>
                                </section>*/