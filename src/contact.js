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

const Homebar = () => {
    return(
        <NavLink to="/" className="atras">
            <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
        </NavLink>
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
        <div class="transi animated fadeIn">
    <div class="col-sm-12 col-xs-12 col-md-12" id="parent">
    	<div class="transi">
    	<iframe className="iframemap" width="100%" height="320px;" frameborder="0"  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJuUb6-dZLQpER3VBWn5LkbKg&key=AIzaSyAR-r_zZLzEB6PGbMl7coYOd4ODLM3FPuk" allowfullscreen></iframe>
    	</div>

    	<div class="col-sm-6">
    		
    	</div>
    </div>

  <div class=" second-portion">
    	<div class="col-xs-12 col-sm-6 col-lg-4">
			<div class="boxed">							
				<div class="icon">
					<div class="image"><i class="fa fa-envelope" aria-hidden="true"></i></div>
					<div class="info">
						<h3 class="title">EMAIL & LINKEDIN</h3>
						<p>
							<i class="fa fa-envelope" aria-hidden="true"></i>  kelyanamurohuamani@gmail.com
							<br/>
							<br/>
							<i class="fa fa-linkedin-square" aria-hidden="true"></i>  <a target="_blank" href="www.linkedin.com/in/kelyanamuro/">www.linkedin.com/in/kelyanamuro/</a>
						</p>
					
					</div>
				</div>
				<div class="space"></div>
			</div> 
		</div>
			
        <div class="col-xs-12 col-sm-6 col-lg-4">
			<div class="boxed">							
				<div class="icon">
					<div class="image"><i class="fa fa-mobile" aria-hidden="true"></i></div>
					<div class="info">
						<h3 class="title">CONTACTO</h3>
    					<p>
							<i class="fa fa-mobile" aria-hidden="true"></i>  (+51) 958604203
							<br/>
							<br/>
							<i class="fa fa-whatsapp" aria-hidden="true"></i>  (+51) 958604203 
						</p>
					</div>
				</div>
				<div class="space"></div>
			</div> 
		</div>
			
        <div class="col-xs-12 col-sm-6 col-lg-4">
			<div class="boxed">							
				<div class="icon">
					<div class="image"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
					<div class="info">
						<h3 class="title">DIRECCIÓN</h3>
    					<p>
							 <i class="fa fa-map-marker" aria-hidden="true"></i>  Alto Selva Alegre Arequipa- Perú
						</p>
					</div>
				</div>
				<div class="space"></div>
			</div> 
		</div>		   
        <div class="col-xs-0 col-sm-3 col-lg-3"></div>
        <div class="col-xs-12 col-sm-6 col-lg-6">
			<div class="boxed">							
				<div class="icon">
					<div class="image"><i class="fa fa-folder-open" aria-hidden="true"></i></div>
					<div class="info">
						<h3 class="title">CURRICULUM VITAE</h3>
    					<p>
							 <i class="fa fa-download" aria-hidden="true"></i>  <a href="https://github.com/KelyKley/Portafolio-FINAL/raw/master/public/cv/Kely-CV%20(1).pdf">Kely Añamuro</a>
						</p>
					</div>
				</div>
				<div class="space"></div>
			</div> 
		</div>	 
</div>

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
                <Homebar/>
                <div id="aboutme" className="row col-lg-9 col-md-9 col-sm-9 col-xs-9 aboutme-scroll" >
                    <div className="">
                            <div  className="">
                                <p className="tab-about text-center">Contáctame </p> 
                                <p className="text-justify introduction">Si te han interesado mis proyectos.</p> 
                                <hr/>
                                <div>
                                    <FormContacto/>
                                </div>
                                
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
