import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./css/app.css";
import { NavLink} from 'react-router-dom';
import Kely from "./pink.png";

const Link = () => {
    return(
        <div>
            <NavLink to="/" className="logo-eve">
                <img src={Kely} class="house naked"/>
            </NavLink>
        </div>
    );
}

const FormContact = () => {
    return(
        <div id="contact">
            <div className="contact-section">
                <div className="container-form">
                    <form className="col-lg-8 col-md-9 col-sm-8 col-xs-9">
                        <div className="">
                            <div className="form-group">
                                <label for="exampleInputUsername">Nombre :</label>
                                <input type="text" className="form-control" id="" placeholder="Ingresa tu nombre"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail">Email :</label>
                                <input type="email" className="form-control" id="exampleInputEmail" placeholder="Ingresa tu email"/>
                            </div>	
                            
                        </div>
                        <div className="">
                            <div className="form-group">
                                <label for ="description"> Mensaje :</label>
                                <textarea  className="form-control" id="description" placeholder="Escribeme..."></textarea>
                            </div>
                            <div>

                                <button type="button" className="btn btn-default submit"><i className="fa fa-paper-plane" aria-hidden="true"></i>  Send Message</button>
                            </div>
                            
                        </div>
                    </form>
        </div>
    </div>
    </div>
    );
}

const FormContacto = () => {
    return(
        <div class="card">
        <div class="photo"></div>
        <div class="banner"></div>
        <ul>
            <li><b>John Doe</b></li>
            <li>Web Developer</li>

        </ul>
        <button class="contact" id="main-button">click to get in touch</button>
        <div class="social-media-banner">
            <a href=""><i class="fa fa-twitter"></i></a>
            <a href=""><i class="fa fa-facebook"></i></a>
            <a href=""><i class="fa fa-instagram"></i></a>
            <a href=""><i class="fa fa-linkedin"></i></a>
        </div>
      <form class="email-form">
            <input id="name" type="text" placeholder="name"/>
            <input id="email" type="text" placeholder="email"/>
            <textarea id="comment" type="text" placeholder="comment"></textarea>
            <button class="contact">send</button>
      </form>
      </div>
    );
}

const Contact = () => {
    return(
        <div id="about">
            <div className="container dad" >
                <div className="row son" >
                    <div className="home">
                        <div className="grow vertical-tab-4 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <p className="rotatePro rotate rotateAbout text-justify">Contact</p>
                        </div>
                    </div>
                    <Link/>
                </div>
                
                <div id="aboutme" className="row col-lg-9 col-md-9 col-sm-9 col-xs-9 aboutme-scroll" >
                    <div className="">
                            <div  className="">
                                <p className="tab-about text-center">Contáctame </p> 
                                <hr/>
                                <div>
                                    <FormContacto/>
                                </div>
                                <ul className="social">
                                    <li className="github"><a href="https://github.com/KelyKley"><i className="fa fa-github fa-3x"></i></a></li>
                                    <li className="twitter"><a href="#"><i className="fa fa-file-text-o fa-3x"></i></a></li>
                                    <li className="google"><a href="#"><i className="fa fa-google-plus fa-3x"></i></a></li>
                                    <li className="linkedin"><a href="#"><i className="fa fa-linkedin fa-3x"></i></a></li>
                                    <li className="codepen"><a href="#"><i className="fa fa-codepen fa-3x"></i></a></li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
