import {
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import { Constants } from 'expo';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  root: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});