import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';

const AuthNavigator = createStackNavigator(
  {
    Registrar: SignUpScreen,
    Ingresar: LoginScreen,
  },
  {
    initialRouteName: 'Ingresar',
  },
);

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthNavigator,
      App: AppNavigator,
      AuthLoading: AuthLoadingScreen,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
