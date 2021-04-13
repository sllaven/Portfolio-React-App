import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import "./Login.css"

class Login extends Component {
    
    state = {
        newAccount: {
            id: "",
            name: "",
            lastname: "",
            phone: "",
            email: "",
        }
    }
    changeHandler = (event) => {
        let id = event.target.id
        let newAccountCopy = {...this.state.newAccount};
        newAccountCopy[id] = event.target.value;
        this.setState({newAccount: newAccountCopy});
    }
    saveAccount = () => {
        this.props.saveAccount(this.state.newAccount);
        this.props.history.push("/accounts");
    }


    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="row">
                        <div className="col-10 offset-1 inputPlace">
                            <input type="text" onChange={this.changeHandler} id="id" placeholder="id" className="showAnimeLeft form-control"/><br/>
                            <input type="text" onChange={this.changeHandler} id="name" placeholder="name" className="showAnimeRight form-control"/><br/>
                            <input type="text" onChange={this.changeHandler} id="lastname" placeholder="lastname" className="showAnimeLeft form-control"/><br/>
                            <input type="text" onChange={this.changeHandler} id="phone" placeholder="phone" className="showAnimeRight form-control"/><br/>
                            <input type="email" onChange={this.changeHandler} id="email" placeholder="email" className="showAnimeLeft form-control"/><br/>
                            <button onClick={this.saveAccount} className="showAnimeRight btnsave form-control">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default  withRouter(Login);