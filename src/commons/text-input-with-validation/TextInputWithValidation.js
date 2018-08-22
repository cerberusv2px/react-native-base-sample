import React from 'react';
import {
  View,
} from 'react-native';

import { FormInput, FormValidationMessage } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

export default ({
  input,
  containerStyle,
  iconName,
  meta: { touched, error },
  ...custom
}) => (
    <View style={[containerStyle, { marginTop: 30 }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            position: 'absolute',
            left: 16,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            paddingBottom: 8,
          }}
        >
          <MaterialCommunityIcons
            name={iconName}
            size={25}
            color={Colors.white}
          />
        </View>

        <FormInput
          containerStyle={{ borderColor: Colors.red, borderRadius: 5, borderWidth: 1, paddingTop: 10 }}
          placeholderTextColor={Colors.red}
          labelStyle={{ fontFamily: 'montserrat' }}
          {...input}
          {...custom}
        />

      </View>

      {
        error && touched &&
        <FormValidationMessage
          labelStyle={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            color: '#EFEFEF',
          }}
          fontFamily='montserrat'
        >
          {error}
        </FormValidationMessage>
      }
    </View>
  );
