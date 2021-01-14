import "../static/FontAwesome/css/all.css";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import SocialLinks from "./SocialLinks";


export default function Profile(){
    return(
        <div id="profile" className="container-fluid">
            <div className="row">
                <div className="section col-md-6 col-12">
                    <PersonalInfo />
                </div>
                <div className="section col-md-6 col-12">
                    <ContactInfo />
                </div>
            </div>
            <div className="row">
                <div className="section col-md-6 col-12">
                    <Education />
                </div>
                <div className="section col-md-6 col-12">
                    <SocialLinks />
                </div>
            </div>
        </div>
    );
}