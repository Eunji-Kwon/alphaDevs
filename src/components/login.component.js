import React,{Component} from "react";

export default class Login extends Component{
   
     render() {
        return (
            <div class="container">
                <div class="col-lg-4">
                    <p>LogIn Page</p>
                </div>
                <div class="col-lg-6">
                    <form onSubmit={this.onSubmit}>
                   
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email</label>
                            <input type="text" class="form-control" value="Email"/>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlInput1">Password</label>
                            <input type="text" class="form-control" value="password" />
                        </div>

                        
                        <button type="submit" class="btn btn-primary">Login</button>
                      
                    </form>
                </div>
                <button type="submit">Sign In</button>
            </div>
        )
    }
}