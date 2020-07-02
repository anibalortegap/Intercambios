import React from 'react';
import {View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {TextInput, Button, Title, withTheme} from 'react-native-paper';

import styles from '../styles/login.StyleSheet';

let AuthenticatorUI = (props) => {
  return (
    <View style={styles.container}>
      <Title style={{color: props.theme.colors.primary}}>
        Ingresar a tu cuenta
      </Title>
      <TextInput
        style={styles.formControl}
        label="Correo electrónico"
        onChangeText={(text) => props.setEmail(text)}
      />
      <TextInput
        style={styles.formControl}
        label="Password"
        onChangeText={(text) => props.setPassword(text)}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          ...styles.formControl,
        }}>
        <TouchableHighlight>
          <Button
            onPress={() => props.mainAction()}
            color={props.theme.colors.primary}
            mode="contained">
            {props.mainButtonTitle}
          </Button>
        </TouchableHighlight>
        <TouchableHighlight>
          <Button onPress={() => props.navigationAction()} mode="contained">
            {props.secondaryButtonTitle}
          </Button>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default withTheme(AuthenticatorUI); //wrapper props.theme
