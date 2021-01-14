import { Component } from "react/cjs/react.production.min";
import Form from "./Form";

class Contact extends Component{
    render(){
        return(
            <div className="container-fluid text-center mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <fieldset>
                            <legend className="text-light bg-dark text-center">Subscribe To My News Letter</legend>
                            <Form />
                        </fieldset>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;