import React, {Component} from 'react';
import {IconButton} from 'react-native-paper';
import HomeComponent from '../components/HomeComponent';

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerStyle: {
        backgroundColor: navigation.getParam('backgroundColor') || '#000000',
      },
      headerTitleStyle: {
        color: '#dae1e7',
      },
      headerRight: (
        <IconButton icon="battery-charging-wireless-outline" color="white" />
      ),
    };
  };

  setNavigationColor = (color) => {
    this.props.navigation.setParams({
      backgroundColor: color,
    });
  };

  render() {
    return <HomeComponent setNavigationColor={this.setNavigationColor} />;
  }
}

export default HomeScreen;
