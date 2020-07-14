import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {withTheme} from 'react-native-paper';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setNavigationColor(this.props.theme.colors.primary);
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <Text>Welcome!!</Text>
      </View>
    );
  }
}

export default withTheme(HomeComponent);
