import React, {Component} from 'react';
import {View, Text} from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = (navigation) => {
    return {
      headerStyle: {
        backgroundColor: '#142850',
      },
      headerTitleStyle: {
        color: '#dae1e7',
      },
    };
  };

  render() {
    return (
      <View>
        <Text>Welcome</Text>
      </View>
    );
  }
}

export default HomeScreen;
