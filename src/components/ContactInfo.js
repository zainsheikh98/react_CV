export default function ContactInfo(){
    return(
        <div className="alert bg-primary text-light text-center">
            <h3>
                <i className="fa fa-lg fa-phone-alt"></i> Contact Information
            </h3>
            <div className="mt-5 mb-5 bg-warning text-left p-2 text-dark">
                <ul className="list-unstyled">
                    <li className="m-3">
                        <i className="fa fa-lg fa-map-marker-alt"></i><strong> HomeTown</strong><br/>Jhang, Punjab, Pakistan, Asia
                    </li>
                    <li className="m-3">
                        <i className="fa fa-lg fa-mobile"></i><strong> Mobile</strong><br/><a className="text-dark font-italic font-weight-bold text-decoration-none" href="tel:+923462989939">+92 346 2989939</a>
                    </li>
                    <li className="m-3">
                        <i className="fab fa-whatsapp fa-lg"></i><strong> Whatsapp</strong><br/><a className="text-dark font-italic font-weight-bold text-decoration-none" href="tel:+923027696834">+92 302 7696834</a>
                    </li>
                    <li className="m-3">
                        <i className="fa fa-lg fa-envelope"></i><strong> E-Mail</strong><br/><small><a className="text-dark font-italic font-weight-bold text-decoration-none" href="mailto:sheikhzain33@gmail.com">sheikhzain33@gmail.com</a></small>
                    </li>
                    <li className="m-3">
                        <i className="fa fa-lg fa-desktop"></i><strong> Website</strong><br/>zainsheikh.com
                    </li>
                </ul>
            </div>
        </div>
    );
}