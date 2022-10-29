import React from "react";                  //imports react

class Login extends React.Component {      //create a container for the form, then the form itself with input type of "text" and placeholder text.
    render() {
        return(
            <div className="container">     
                <form>
                    <h3>Log In:</h3>
                    <div className="ui form">
                        <div className="field">
                            <label><strong>User Name: </strong></label>
                            <input type="text" name="username" placeholder="User Name" />
                        </div>
                        <div className ="field">
                            <label><strong>Email Address: </strong></label>
                            <input type="text" name="email" placeholder="Email Address" />
                        </div>
                        <button className="fluid ui button blue">Submit</button>
                    </div>
                </form>
            </div>

        )
    }
}

export default Login;       //exports so that it can be used by App.js