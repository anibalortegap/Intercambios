import React, {Component} from 'react';
import AuthenticatorUI from '../components/AuthenticatorUI';
import auth from '@react-native-firebase/auth';
class SignUpScreen extends Component {
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

  createUser = async () => {
    try {
      let response = await auth().createUserWithEmailAndPassword(
        this.state.email,
        this.state.password,
      );
      let {user} = response; //destructuring objects
      console.log(user);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <AuthenticatorUI
        setEmail={this.setEmail}
        setPassword={this.setPassword}
        mainButtonTitle="Guardar usuario"
        secondaryButtonTitle="Ya tengo cuenta"
        navigationAction={() => {
          this.props.navigation.navigate('Ingresar');
        }}
        mainAction={this.createUser}
      />
    );
  }
}

export default SignUpScreen;
