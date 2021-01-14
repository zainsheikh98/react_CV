import { Component } from "react/cjs/react.production.min";

class Form extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            firstName: "",
            lastName: "",
            email: ""
        }

    }

    handleSubmit(e){
        e.preventDefault();
        alert("Hello, My Name is " + this.state.firstName + " " + this.state.lastName + " & My email is " + this.state.email);
    }

    handleChange(e){
        e.preventDefault();
        this.setState({[e.target.name] : e.target.value});
    }


    render(){
        return(
            <form className="form section" method="POST" onSubmit={this.handleSubmit}>
                <div className="name-input">
                    <input 
                        className="name"
                        autoComplete="off" 
                        type="text" 
                        name="firstName" 
                        required
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="name" className="label-name">
                        <span className="content-name">
                            First Name
                        </span>
                    </label>
                </div>
                <div className="name-input">
                    <input
                        className="name"
                        autoComplete="off"
                        type="text"
                        name="lastName"
                        required
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="name" className="label-name">
                        <span className="content-name">
                            Last Name
                        </span>
                    </label>
                </div>
                <div className="name-input">
                    <input
                        className="name"
                        autoComplete="off"
                        type="email"
                        name="email"
                        required
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="name" className="label-name">
                        <span className="content-name">
                            Email
                        </span>
                    </label>
                </div>
                <button className="btn btn-primary" type="submit">Subscribe</button>
            </form>
        );
    }
}

export default Form;