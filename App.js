/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import AppNavigator from './Navigator';

import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#142850',
  },
};
type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <PaperProvider theme={appTheme}>
        <AppNavigator />
      </PaperProvider>
    );
  }
}

console.log('Debug!');

export default App;
