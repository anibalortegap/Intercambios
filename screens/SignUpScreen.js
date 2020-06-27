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
    try{
      let response = await auth().createUserWithEmailAndPassword(
        this.state.email,
        this.state.password
        );
      let { user } = response
      console.log(user)
    }catch(err){
      console.error(err)
    }
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
