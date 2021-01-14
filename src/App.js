//                   CSS / JS / STYLING
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import $ from '../node_modules/jquery/dist/jquery.min.js';
import popper from '../node_modules/popper.js/dist/popper.min.js';
import "./static/FontAwesome/css/all.css";

//                  COMPONENTS
import Navbar from './components/Navbar';
import PersonalInfo from './components/PersonalInfo';
import ContactInfo from './components/ContactInfo';
import Education from './components/Education';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import IntroCardSection from './components/IntroCardSection';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Loader from './components/Loader';

//                  REACT DEPENDENCIES
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import {BrowserRouter as Router} from 'react-router-dom';

export default function App() {
  window.addEventListener("load", function(){
    console.log("Done Loading");
    $("#pre-loader").css({
      "display": "none"
    });
    $("#application").css({
      "display": "block"
    });
  });
  $(document).ready(function(){
    console.log("Done ready");
    $(document).scroll(function(){
      let distance = $(document).scrollTop();
      if(distance>250){
        $("nav").css({
          "width": "100vw",
          "height": "20vh",
          "transition": "0.5s ease-in-out",
          "backgroundImage": "linear-gradient(rgba(0,0,0,1),rgba(0,0,0,1))",
          "opacity": 1
        });
        $(".header-content").css({
          "display": "none"
        });
      }else{
        $("nav").css({
          "width": "100vw",
          "height": "100vh",
          "transition": "0.5s ease-in-out",
          "backgroundImage": "linear-gradient(rgba(255,255,255,1),rgba(0,0,0,1))",
          "opacity": 0
        });
        $(".header-content").css({
          "display": "block"
        });
      }
    });
  });
  return (
    <div className="body">
      <Router>
        <div id="pre-loader">
          <Loader/>
        </div>
        <div id="application" className="container-fluid">
          <div id="navbar" className="row">
            <div className="col-md-12">
              <Navbar />
            </div>
          </div>
          <div id="profile">
            <div className="personal-contact row">
              <div className="section col-md-6 col-12">
                <ScrollAnimation duration={1} animateIn='bounce' animateOut='tada'>
                  <PersonalInfo />
                </ScrollAnimation>
              </div>
              <div className="section col-md-6 col-12">
                <ScrollAnimation duration={1} animateIn='tada' animateOut='bounce'>
                  <ContactInfo />
                </ScrollAnimation>
              </div>
            </div>
            <div className="row">
              <div className="section col-md-6 col-12">
                <ScrollAnimation duration={1} animateIn='fadeIn' animateOut='fadeOut'>
                  <Education />
                </ScrollAnimation>
              </div>
              <div className="section col-md-6 col-12">
                <ScrollAnimation duration={1} animateIn='fadeIn' animateOut='fadeOut'>
                  <SocialLinks />
                </ScrollAnimation>
              </div>
            </div>
          </div>
          <div id="about" className="row">
            <div className="section col-md-12 col-12">
              <ScrollAnimation duration={2} animateIn='bounceInRight' animateOut='bounceOutLeft'>
                <About />
              </ScrollAnimation>
            </div>
          </div>
          <div id="introSection" className="row">
            <div className="section col-md-12 col-12">
              <ScrollAnimation duration={3} animateIn='tada' animateOut='hinge'>
                <IntroCardSection />
              </ScrollAnimation>
            </div>
          </div>
          <div id="skills" className="row">
            <div className="section col-md-12 col-12">
              <ScrollAnimation duration={2} animateIn='flipInY' animateOut='flipOutY'>
                <Skills />
              </ScrollAnimation>
            </div>
          </div>
          <div id="contact">
            <ScrollAnimation duration={1} animateIn='bounceInUp' animateOut='bounceOutDown'>
              <Contact />
            </ScrollAnimation>
          </div>
          <div id="footer" className="row">
            <div className="section col-md-12 col-12">
              <ScrollAnimation duration={1} animateIn='bounceInRight' animateOut='tada'>
                <Footer />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}




// //React Router
// <Switch>
//   <Route exact path="/" component = {Profile} />
//   <Route exact path="/about" component = {About} />
//   <Route exact path="/skills" component = {Skills} />
//   <Route exact path="" component = {Profile} />
// </Switch>
//

// CODE FOR ADJUSTING SCREEN HEIGHT
// var menu_height = $('#nav').height();
// var total_height = $(window).height();
// var content_height = total_height - menu_height - 70;
// $('#content').css("height",content_height);
// $('.body').css("height",total_height);