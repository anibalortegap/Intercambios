import React, {Component} from 'react';
import auth from '@react-native-firebase/auth';
import AuthenticatorUI from '../components/AuthenticatorUI';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  setEmail = (email) => {
    this.setState({
      email: email,
    });
  };

  setPassword = (password) => {
    this.setState({
      password,
    });
  };

  loginUser = () => {
    auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((response) => {
        let user = response.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <AuthenticatorUI
        setEmail={this.setEmail}
        setPassword={this.setPassword}
        mainButtonTitle="Ingresar"
        mainAction={this.loginUser}
      />
    );
  }
}
