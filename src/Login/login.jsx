import React, { Component } from 'react'
import firebase from 'firebase';
import firebaseConfig from '../firebase/config';
import './login.css';

export default class login extends Component {
    constructor(props) {
        super(props)

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        } else {
            firebase.app(); // if already initialized, use that one
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: "",
            password: "",
            user: {}
        }
    }

    authListener() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    user
                })
                console.log("User adalah : " + user.email)
            }
            else {
                this.setState({
                    user: null
                })
            }
        })
    }

    componentDidMount() {
        this.authListener();
    }

    handleLogin(e) {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
            //   (<Redirect to="/list-product" />)
        }).catch((err) => {
            console.log(err);
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    }

    logout() {
        firebase.auth().signOut();
        window.location.reload();
    }

    render() {
        return this.state.user ? (
            <div class="container">
                <div class="row">
                    <div class="col-md-5 mx-auto">
                    <div id="first">
                        <div class="myform form ">
                            <div class="logo mb-3">
                                <div class="col-md-12 text-center">
                                    <h1>{this.state.user.email}</h1>
                                </div>
                            </div>
                                <p></p>
                                <div class="col-md-12 text-center ">
                                    <button type="submit" onClick={this.logout} class=" btn btn-block mybtn btn-primary tx-tfm">Logout</button>
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        ) : (
            <div class="container">
                <div class="row">
                    <div class="col-md-5 mx-auto">
                    <div id="first">
                        <div class="myform form ">
                            <div class="logo mb-3">
                                <div class="col-md-12 text-center">
                                    <h1>Login</h1>
                                </div>
                            </div>
                            <form action="" method="post" name="login">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" onChange={this.handleChange} name="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Password</label>
                                    <input type="password" onChange={this.handleChange} name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Password"/>
                                </div>
                                <p></p>
                                <div class="col-md-12 text-center ">
                                    <button type="submit" onClick={this.handleLogin} class=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
