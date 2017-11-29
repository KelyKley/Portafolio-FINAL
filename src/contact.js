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

const Contact = () => {
    return(
        <div id="contact">
            <div className="container dad" >
                <div className="row son" >
                    <div className="home col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="grow vertical-tab-4">
                                <p className="tab-title">4</p> 
                                <p className="rotateContact rotate">Contact</p>
                            </div>
                    </div>
                </div>
                <Link/>
                <div id="aboutme" className="row" >
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                            <div  className="grow">
                            <p className="tab-about text-center">Contact me </p> 
                                <div>
                                    <FormContact/>
                                </div>
                                <ul className="social">
                                    <li className="github"><a href="https://github.com/KelyKley"><i className="fa fa-github fa-3x"></i></a></li>
                                    <li className="twitter"><a href="#"><i className="fa fa-file-text-o fa-3x"></i></a></li>
                                    <li className="google"><a href="#"><i className="fa fa-google-plus fa-3x"></i></a></li>
                                    <li className="linkedin"><a href="#"><i className="fa fa-linkedin fa-3x"></i></a></li>
                                    <li className="codepen"><a href="#"><i className="fa fa-github fa-3x"></i></a></li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
