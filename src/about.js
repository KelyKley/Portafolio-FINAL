import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./css/app.css";
import { NavLink} from 'react-router-dom';

const About = () => {
    return(
        <div id="about">
            <div className="container dad" >
                <div className="row son" >
                    <div className="home col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <NavLink to="/home" className="grow vertical-tab-2">
                                <p className="tab-title">2</p> 
                                <p className="rotateAbout text-justify">About</p>
                            </NavLink>
                    </div>
                </div>
                <div id="aboutme" className="row" >
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div  className="grow">
                                <p className="tab-about text-center">About me</p> 
                                <h1><img src =""/></h1>
                                <p className="text-justify introduction">Soy Kely Añamuro, una desarrolladora web front-end jr.</p> 
                                <p className="text-justify introduction">Estoy interesado en todo lo que sea web. </p>
                                <p className="text-justify introduction">Pasé los últimos meses en el bootcamp de Laboratoria - Arequipa, donde tuve la oportunidad de proveerme 
                                de muchos conocimientos, tiempo durante el cual diseñé
                                y construí diversas páginas web funcionales.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
