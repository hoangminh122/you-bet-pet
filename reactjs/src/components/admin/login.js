import React, { Component } from 'react';
import './style.css'
import axios from 'axios'
import { withRouter } from "react-router-dom";
class login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password :'',
            success:2,
            data :[]
        }
    }

    changeInputEmail(e){
        this.setState({
            email:e.target.value
        })
    }

    changeInputPassword(e){
        this.setState({
            password:e.target.value
        })
    }
    componentDidMount() {
        // axios.get(`http://localhost:3006/user`)
        // .then(res => {
        //   const persons = res.data;
        //   console.log(persons)
        // })
    }
    
    PostLoginByEmail = async () => {
        console.log("ádasd")
        console.log(this.state)
        console.log("ádasd")
    //    console.log(process.env.SERVER)
        const server = process.env.SERVER + '/'+ process.env.PORT +'/auth/login' ;
        // if(this.state.email && this.state.password) {
        // //    await axios.post(`http://${process.env.SERVER}:3006/auth/login`, { 
        //     await axios.post(`http://192.168.1.6:3006/auth/login`, {
        //         email:this.state.email,
        //         password:this.state.password
        //      })
        //     .then(res => {
        //         // this.props.history.push("/index");
               
        //     //   console.log("ok");
        //     //   console.log(res.data);
        //     //   console.log("ok");
        //     //   this.setState({
        //     //       data:res.data[0]
        //     //   })
        //     })
        //     .catch(e => {
        //         console.log("error"+e)
        //         return;
        //     })
        // }
        this.props.history.push("/index");
    }

    alertAfterLogin = () => {
        if(this.state.success == 1){
            return (
                    <div class="alert alert-success col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <strong>Success!</strong> Login successful !!.
                    </div>
            );
        }
        if(this.state.success == 0) {
            return (
                <div class="alert alert-danger col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <strong>Username or password wrong!</strong>
                </div>
            );
           
            
        }
        return 'asdad';
        
        
    }

    render() {
        
        // console.log(this.state)
        return (
            <div className="container">
                    {this.alertAfterLogin()}
                    <div className="row">
                    
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sign In</h5>
                            <form className="form-signin">
                            <div className="form-label-group">
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus onChange={(event) =>this.changeInputEmail(event)}/>
                                <label for="inputEmail">Email address</label>
                            </div>

                            <div className="form-label-group">
                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={(event) =>this.changeInputPassword(event)}/>
                                <label for="inputPassword">Password</label>
                            </div>

                            <div className="custom-control custom-checkbox mb-3">
                                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                <label className="custom-control-label" for="customCheck1">Remember password</label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={() => this.PostLoginByEmail()}>Sign in</button>
                            <hr className="my-4"/>
                            <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                            <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
                        
        );
    }
}

export default withRouter(login);