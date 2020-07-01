import React, {Component} from 'react';
import auth from '@react-native-firebase/auth';
import AuthenticatorUI from '../components/AuthenticatorUI';

class LoginScreen extends Component {
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

  loginUser = async () => {
    try {
      let response = await auth().signInWithEmailAndPassword(
        this.state.email,
        this.state.password,
      );
      let {user} = response;
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <AuthenticatorUI
        setEmail={this.setEmail}
        setPassword={this.setPassword}
        mainButtonTitle="Ingresar"
        secondaryButtonTitle="No tengo cuenta"
        navigationAction={() => {
          this.props.navigation.navigate('Registrar');
        }}
        mainAction={this.loginUser}
      />
    );
  }
}

export default LoginScreen;
