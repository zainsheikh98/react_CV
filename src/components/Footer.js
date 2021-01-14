import {Link} from "react-router-dom";
export default function Footer(){
    let fulldate = new Date();
    return(
        <footer  id="footer">
            <div className="sm mt-5 d-flex align-items-end align-self-end align-content-end justify-content-center">
                <Link to="#" className="nav-link"><i className="fab fa-facebook-f"></i></Link>
                <Link to="#" className="nav-link"><i className="fab fa-twitter"></i></Link>
                <Link to="#" className="nav-link"><i className="fab fa-youtube"></i></Link>
                <Link to="#" className="nav-link"><i className="fab fa-instagram"></i></Link>
            </div>
            <div className="row footer-content-div mt-5 d-flex justify-content-center">
                <div className="col-md-4 col-12">
                    <h6 className="footer-content text-center">
                        <i className="fa fa-lg fa-copyright"></i>
                        <strong>{fulldate.toDateString()}</strong>
                    </h6>
                </div>
                <div className="col-md-4 col-12">
                    <h6 className="footer-content text-center">
                        <i className="fa fa-lg fa-trademark"></i>
                        <strong>Zain Sheikh</strong>
                    </h6>
                </div>
                <div className="col-md-4 col-12">
                    <h6 className="footer-content text-center">
                        <i className="fa fa-lg fa-registered"></i>
                        <strong>All Rights Are reserved</strong>
                    </h6>
                </div>
            </div>
        </footer>
    );
}