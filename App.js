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
import {Provider as StateProvider} from 'react-redux';
import store from './Store';

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
        <StateProvider store={store}>
          <AppNavigator />
        </StateProvider>
      </PaperProvider>
    );
  }
}

console.log('Debug!');

export default App;
