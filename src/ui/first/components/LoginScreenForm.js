import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import { Field, reduxForm } from 'redux-form';
import { Button, Card } from 'react-native-elements';
import Colors from '../../../constants/Colors';

import { TextInputWithValidation } from '../../../commons';

import ConstStyles from '../../../constants/Styles';

const LoginScreenForm = ({
  handleSubmit,
  onLoginPress,
}) => (
    <View style={[ConstStyles.container, {marginHorizontal: '10%' }]}>
      <Card containerStyle={{ marginHorizontal: 30, padding: '5%' }}>
        <Field
          component={TextInputWithValidation}
          name="email"
          placeholder="Email"
          iconName="email"
          inputStyle={ConstStyles.inputTextElement}
          underlineColorAndroid={Colors.white}
          keyboardType="email-address"
        />

        <Field
          component={TextInputWithValidation}
          name="password"
          placeholder="Password"
          iconName="lock"
          inputStyle={ConstStyles.inputTextElement}
          underlineColorAndroid={Colors.white}
          secureTextEntry
        />

        <View style={{ alignItems: 'flex-end', marginRight: 15, paddingHorizontal: 20, marginTop: 15 }}>
          <Text style={{ fontFamily: 'montserratLight' }}>Forgot Password?</Text>
        </View>
      </Card>

      <View style={{ alignItems: 'flex-end', marginTop: '5%' }}>
        <Button
          title="LOGIN"
          backgroundColor={Colors.red}
          buttonStyle={{ borderRadius: 20, paddingHorizontal: '25%' }}
          textStyle={{ fontFamily: 'montserrat', color: Colors.white }}
          onPress={handleSubmit(onLoginPress)}
        />
      </View>

    </View>
  );


export default reduxForm({
  form: 'loginScreenForm',
})(LoginScreenForm);