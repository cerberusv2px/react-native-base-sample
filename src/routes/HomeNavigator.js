import React from 'react';
import { createStackNavigator } from 'react-navigation';

import {
  FirstScreen,
} from '../ui';

export default createStackNavigator({
  Home: { screen: FirstScreen },
});