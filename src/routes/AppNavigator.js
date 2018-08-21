import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Platform,
} from 'react-native';

import { Constants } from 'expo';

import { connect } from 'react-redux';

import ConstStyles from '../constants/Styles';

import HomeNavigator from './HomeNavigator'

const stateMap = (state) => ({
  user: state.user
});

class AppNavigator extends Component {
  render() {
    return (
      <View style={ConstStyles.root}>
        <StatusBar
          translucent
          backgroundColor="rgba(0,0,0, 0.24)"
          animated
        />
        {
          Platform.OS === 'android' && Platform.Version >= 20 ?
            <View
              style={{
                height: Constants.statusBarHeight,
                backgroundColor: '#6bcbf8',
              }}
            />
            : null
        }

        <HomeNavigator />
      </View>
    );
  }
}

export default connect(stateMap)(AppNavigator);