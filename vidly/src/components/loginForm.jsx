import React, { Component } from "react";
import Form from "./common/form";
import Joi, { errors } from "joi-browser";
import { login } from "../services/authService";

class LoginForm extends Form {
  //   username = React.createRef();
  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await login(data.username, data.password);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const error = { ...this.state.error };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
