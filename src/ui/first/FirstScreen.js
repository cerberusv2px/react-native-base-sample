import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import ConstStyle from '../../constants/Styles';

export default class FirstScreen extends Component {
  render() {
    return (
      <View style={ConstStyle.container}>
        <View style={{ flex: 1 }}>
          <Text style={{ textAlign: 'center', fontSize: 16, color: '#A12BEE' }}>Hello Humans</Text>
        </View>
      </View>
    );
  };
}