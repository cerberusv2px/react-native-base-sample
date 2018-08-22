import {
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import { Constants } from 'expo';

import Colors from './Colors';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  root: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },

  inputTextElement: {
    paddingLeft: 30,
    color: '#EF32AB',
    fontSize: 16,
    width: (Platform.OS === 'ios') ? width - 36 : width - 30,
    paddingBottom: 8,
  },
});