import React, {Component} from 'react';
import AuthenticatorUI from '../components/AuthenticatorUI';
import auth from '@react-native-firebase/auth';
export default class SignUpScreen extends Component {
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

  createUser = () => {
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((response) => {
        console.log(response);
        let user = response.user;
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <AuthenticatorUI
        setEmail={this.setEmail}
        setPassword={this.setPassword}
        mainButtonTitle="Guardar usuario"
        mainAction={this.createUser}
      />
    );
  }
}
