// import {NavLink } from 'react-router-dom';
import { Link } from "react-scroll";
import { Component } from "react";

export default class Navbar extends Component{
    listener = null;
    state = {
        nav:false
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll');
    }
    handleScroll= () => {
        if (window.pageYOffset > 140) {
            if(!this.state.nav){
                this.setState({ nav: true });
            }
        }else{
            if(this.state.nav){
                this.setState({ nav: false });
            }
        }
    }
    render(){
        return(
        <>
            <div className="header-content">
                <h1 className="text-light text-center mt-5 p-5">
                    Hey I'm Zain Sheikh<br/>
                    <small> <i className="fa fa-lg fa-lightbulb"></i> Creative Web Developer</small>
                </h1>
            </div>
            <nav id="nav" className={'navbar position-fixed navbar-expand-lg ${this.state.nav && nav__black}'}>
                <h6 className="text-light m-3" id="title">Sheikh Zain Ul Abidin</h6>
                <button id="neon" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="text-light fa fa-lg fa-caret-down"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link activeClass="active" id="neon" className="nav-item nav-link p-3"  to="profile"  spy={true} smooth={true} offset={-170} duration={500} >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i className="fa fa-lg fa-user"></i><strong>Profile</strong>
                        </Link>
                        <Link activeClass="active" id="neon" className="nav-item nav-link p-3" to="about" spy={true} smooth={true} offset={-170} duration={500} >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i className="fa fa-lg fa-users"></i><strong>About</strong>
                        </Link>
                        <Link activeClass="active" id="neon" className="nav-item nav-link p-3" to="introSection" spy={true} smooth={true} offset={-170} duration={500} >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i className="fa fa-lg fa-info-circle"></i><strong>My Work</strong>
                        </Link>
                        <Link activeClass="active" id="neon" className="nav-item nav-link p-3" to="skills" spy={true} smooth={true} offset={-50} duration={500} >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i className="fa fa-lg fa-code"></i><strong>Skills</strong>
                        </Link>
                        <Link activeClass="active" id="neon" className="nav-item nav-link p-3" to="contact" spy={true} smooth={true} offset={-200} duration={500} >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i className="fa fa-lg fa-bell"></i><strong>Subscribe</strong>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
        );
    }
}