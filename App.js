import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AppRegistry,
} from 'react-native';
import FBSDK, { LoginManager } from 'react-native-fbsdk';



export default class App extends Component<{}> {
  _fbAuth() { //full list of permissions at developers.facebook.com/docs/facebookloginpermissions
    LoginManager.logInWithReadPermissions(['public_profile']).then(
         function(result) {
            if (result.isCancelled) {
               alert('Login cancelled');
            } else {
               alert('Login success with permissions: '
               +result.grantedPermissions.toString());
            }
         }, function(error) {
        console.log('error occurred' + error); //handle this better later
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._fbAuth}>
        <Text>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


AppRegistry.registerComponent('RNF', () => RNF);
