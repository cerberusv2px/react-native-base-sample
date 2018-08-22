import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import ConstStyle from '../../constants/Styles';

import  {LoginScreenForm}  from './components';

import Colors from '../../constants/Colors';

export default class FirstScreen extends Component {

  handleLoginPress = () => {
    console.log("Login Press");
  }

  render() {
    return (
      <View style={ConstStyle.container}>

        <View style={{ marginTop: '10%', marginHorizontal: '15%',flex: 2 }}>
          <LoginScreenForm
            onLoginPress={this.handleLoginPress}
          />
        </View>

        <View style={{ alignItems: 'center', flex: 1 }}>
          <Text style={{ color: Colors.red, fontSize: 14, fontFamily:'montserrat' }}>Dont Have an account?</Text>
          <Text style={{ color: Colors.red, fontSize: 12, fontFamily:'montserrat' }}>Create One</Text>
        </View>
      </View>
    );
  };
}