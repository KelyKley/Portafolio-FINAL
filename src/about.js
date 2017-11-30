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

const About = () => {
    return(
        <div id="about">
            <div className="container dad" >
                <div className="row son" >
                    <div className="home ">
                            <div className="grow vertical-tab-2 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <p className="rotateAbout text-justify">About</p>
                            </div>
                    </div>
                    <Link/>
                </div>
                <div id="aboutme" className="row" >
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                            <div  className="grow">
                                <p className="tab-about text-center">Acerca de mi</p> 
                                <div className="">
                                    <h1 className="text-center"><img className="img-circle img-responsive" src ="https://raw.githubusercontent.com/KelyKley/Portafolio-FINAL/master/public/img/me.png"/></h1>
                                </div>
                                <div className="">
                                    <p className="text-justify introduction">Soy Kely Añamuro, desarrolladora web front-end jr.</p> 
                                    <p className="text-justify introduction">Soy egresada de Laboratoria. Responsable y autodidacta con
                                    habilidades para el trabajo en equipo, gracias al manejo de laMetodología Agile. Con mucho
                                    interés en el sector digital y tecnológico.</p>
                                    <p className="text-justify introduction">Crear, construir y diseñar son mis mas grandes pasiones.</p>
                                </div>
                                
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
