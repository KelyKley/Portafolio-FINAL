import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./css/app.css";
import { NavLink} from 'react-router-dom';

const Home = () => {
    return(
        <div id="home">
            <div className="container dad" >
                <div className="row son" >
                    <div className="home col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <NavLink to="/about" className="grow vertical-tab-2 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                <p className="tab-title">1</p> 
                                <p className="rotate">About</p>
                            </NavLink>
                            <NavLink to="/" className="grow vertical-tab-1 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                <p className="tab-title">2</p> 
                                <p className="rotate">Skills</p>
                            </NavLink>
                            
                            <NavLink to="/projects" className="grow vertical-tab-3 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                <p className="tab-title">3</p> 
                                <p className="rotate">Projects</p>
                            </NavLink>
                            <NavLink to="/contact" className="grow vertical-tab-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                <p className="tab-title">4</p> 
                                <p className="rotate">Contact</p>
                            </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
