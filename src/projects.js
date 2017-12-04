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
                <div id="aboutme" className="row col-lg-9 col-md-9 col-sm-9 col-xs-9 aboutme-scroll" >
                    <div className="">
                            <div  className=" ">
                                <p className="tab-about text-center">Mis proyectos</p> 
                                <hr/>
                                <div class="main"> 
                                    <div class="view view-tenth">
                                        <img src="https://raw.githubusercontent.com/KelyKley/Portafolio-FINAL/master/public/img/reserva.png" />
                                        <div class="mask">
                                            <h2>RVSP</h2>
                                            <p>HTML + REACT + CSS + BOOTSTRAP</p>
                                            <a href="https://KelyKley.github.io/MVC-Invitacion" class="info">Demo</a>
                                            <a href="https://github.com/KelyKley/MVC-Invitacion" class="info">Code</a>
                                        </div>
                                    </div>
                                    <div class="view view-tenth">
                                        <img src="https://raw.githubusercontent.com/KelyKley/Portafolio-FINAL/master/public/img/score.png" />
                                        <div class="mask">
                                            <h2>Score Board</h2>
                                            <p>HTML + REACTJS + CSS + BOOTSTRAP</p>
                                            <a href="https://kelykley.github.io/Score-timer/" class="info">Demo</a>
                                            <a href="https://github.com/KelyKley/Score-timer" class="info">Code</a>
                                        </div>
                                    </div>
                                    <div class="view view-tenth">
                                        <img src="https://raw.githubusercontent.com/KelyKley/Portafolio-FINAL/master/public/img/car.png" />
                                        <div class="mask">
                                            <h2>Car</h2>
                                            <p>HTML + REACTJS + CSS + BOOTSTRAP</p>
                                            <a href="https://solics.github.io/car-insurance/" class="info">Demo</a>
                                            <a href="https://github.com/KelyKley/car-beta" class="info">Code</a>
                                        </div>
                                    </div>
                                    <div class="view view-tenth">
                                        <img src="https://raw.githubusercontent.com/KelyKley/Portafolio-FINAL/master/public/img/course.png" />
                                        <div class="mask">
                                            <h2>Courses</h2>
                                            <p>HTML + REACTJS + CSS + BOOTSTRAP</p>
                                            <a href="https://kelykley.github.io/React-app-course/" class="info">Demo</a>
                                            <a href="https://github.com/KelyKley/React-app-course" class="info">Code</a>
                                        </div>
                                    </div>
                                    <div class="view view-tenth">
                                        <img src="https://raw.githubusercontent.com/KelyKley/Portafolio-FINAL/master/public/img/lyft2.png" />
                                        <div class="mask">
                                            <h2>Lyft</h2>
                                            <p>HTML + REACTJS + CSS + BOOTSTRAP</p>
                                            <a href="https://gabiprds93.github.io/Proyecto-Lyft" class="info">Demo</a>
                                            <a href="https://github.com/KelyKley/Proyecto-Lyft" class="info">Code</a>
                                        </div>
                                    </div>
                                    <div class="view view-tenth">
                                        <img src="https://raw.githubusercontent.com/KelyKley/Portafolio-FINAL/master/public/img/sushi.png" />
                                        <div class="mask">
                                            <h2>Shop Sushi</h2>
                                            <p>HTML + REACT + CSS + JS + BOOTSTRAP</p>
                                            <a href="https://jani-123.github.io/Japanesefood/#/" class="info">Demo</a>
                                            <a href="https://github.com/KelyKley/Japanesefood" class="info">Code</a>
                                        </div>
                                    </div>
                                    <div class="view view-tenth">
                                        <img src="https://raw.githubusercontent.com/KelyKley/Portafolio-FINAL/master/public/img/sushi.png" />
                                        <div class="mask">
                                            <h2>Game Planet</h2>
                                            <p>HTML + CSS + JS + BOOTSTRAP</p>
                                            <a href="https://mariley20.github.io/game-planet/" class="info">Demo</a>
                                            <a href="https://github.com/KelyKley/game-planet" class="info">Code</a>
                                        </div>
                                    </div>
                                    <div class="view view-tenth">
                                        <img src="https://raw.githubusercontent.com/KelyKley/Portafolio-FINAL/master/public/img/sushi.png" />
                                        <div class="mask">
                                            <h2>Trivia</h2>
                                            <p>HTML JS + CSS + BOOTSTRAP</p>
                                            <a href="https://kelykley.github.io/Quiz-Demo/" class="info">Demo</a>
                                            <a href="https://github.com/KelyKley/Quiz-Demo" class="info">Code</a>
                                        </div>
                                    </div>
                                    <div class="view view-tenth">
                                        <img src="https://raw.githubusercontent.com/KelyKley/Portafolio-FINAL/master/public/img/sushi.png" />
                                        <div class="mask">
                                            <h2>Encuéntrame</h2>
                                            <p>HTML + JS + CSS + BOOTSTRAP</p>
                                            <a href="https://kelykley.github.io/GeoLocalizaci-n-Ver2/" class="info">Demo</a>
                                            <a href="https://github.com/kelykley/GeoLocalizaci-n-Ver2/" class="info">Code</a>
                                        </div>
                                    </div>
                                    <div class="view view-tenth">
                                        <img src="https://raw.githubusercontent.com/KelyKley/Portafolio-FINAL/master/public/img/sushi.png" />
                                        <div class="mask">
                                            <h2>App Love</h2>
                                            <p>HTML + JS + CSS + BOOTSTRAP</p>
                                            <a href="https://kelykley.github.io/Proyect-applove/" class="info">Demo</a>
                                            <a href="https://github.com/KelyKley/Proyect-applove" class="info">Code</a>
                                        </div>
                                    </div>
                                    <div class="view view-tenth">
                                        <img src="https://raw.githubusercontent.com/KelyKley/Portafolio-FINAL/master/public/img/sushi.png" />
                                        <div class="mask">
                                            <h2>Freelancer</h2>
                                            <p>HTML + JS + CSS + BOOTSTRAP</p>
                                            <a href="https://kelykley.github.io/Proyect-freelancer/" class="info">Demo</a>
                                            <a href="https://github.com/KelyKley/Proyect-freelancer" class="info">Code</a>
                                        </div>
                                    </div>
                                    <div class="view view-tenth">
                                        <img src="https://raw.githubusercontent.com/KelyKley/Portafolio-FINAL/master/public/img/sushi.png" />
                                        <div class="mask">
                                            <h2>Memory Game</h2>
                                            <p>HTML + JQUERY + CSS + BOOTSTRAP</p>
                                            <a href="https://kelykley.github.io/Game-memory/" class="info">Demo</a>
                                            <a href="https://github.com/KelyKley/Game-memory" class="info">Code</a>
                                        </div>
                                    </div>
                                    <div class="view view-tenth">
                                        <img src="https://raw.githubusercontent.com/KelyKley/Portafolio-FINAL/master/public/img/sushi.png" />
                                        <div class="mask">
                                            <h2>Save the koala</h2>
                                            <p>HTML + JS + CSS + BOOTSTRAP</p>
                                            <a href="https://kelykley.github.io/save-the-koala-vol2/" class="info">Demo</a>
                                            <a href="https://github.com/KelyKley/save-the-koala-vol2" class="info">Code</a>
                                        </div>
                                    </div>
                                    <div class="view view-tenth">
                                        <img src="https://raw.githubusercontent.com/KelyKley/Portafolio-FINAL/master/public/img/sushi.png" />
                                        <div class="mask">
                                            <h2>Start Studio</h2>
                                            <p>HTML + JS + CSS + BOOTSTRAP</p>
                                            <a href="https://kelykley.github.io/Start-Studio-Proyect/" class="info">Demo</a>
                                            <a href="https://github.com/KelyKley/Start-Studio-Proyect" class="info">Code</a>
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
