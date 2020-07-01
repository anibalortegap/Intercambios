import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';

export default class AuthLoadingScreen extends Component {
  componentDidMount() {
    this.getUser();
    console.log('Loading!!');
  }
  getUser() {
    auth().onUserChanged((user) => {
      if (user) {
        console.log(user);
        this.props.navigation.navigate('App');
      } else {
        this.props.navigation.navigate('Auth');
      }
    });
  }
  render() {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}
