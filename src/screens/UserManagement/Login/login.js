
import React, { useState } from 'react';
import styles from './styles';
import { View, Text, SafeAreaView, ImagePath, AppButton, AppInputText } from '@alias';
import { Alert, Keyboard, TouchableOpacity } from 'react-native';
import { ProximaNovaFontbold } from '../../../styles/typography';

const SignUp = (props) => {
  const [userPassword, setUserPassword] = useState()
  const [userEmail, setUserEmail] = useState()

  const onClickContinue = () => {
    Keyboard.dismiss()
    let data = {
      email: userEmail,
      password: userPassword
    }
    console.log('user data =======', data);
    props.navigation.navigate('Assessment')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperHeadingText}>
        <Text style={styles.BoldText}>{`Please Login here`}</Text>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.BoldText}>{`Login`}</Text>
        <AppInputText
          placeholder='Email'
          imagepassword={ImagePath.userIcon}
          value={userEmail}
          onChangeText={(value) => setUserEmail(value)}
        />

        <AppInputText
          placeholder='Password'
          imagepassword={ImagePath.userIcon}
          secureTextEntry={true}
          maxLength={8}
          value={userPassword}
          onChangeText={(value) => setUserPassword(value)}
        />
        <TouchableOpacity style={{ alignSelf: 'flex-end', paddingHorizontal: 15 }}>
          <Text style={{ textAlign: 'right', color: '#000', fontFamily: ProximaNovaFontbold, textDecorationLine: 'underline', }}>{`FORGOT PASSWORD`}</Text>
        </TouchableOpacity>
        <AppButton
          onpress={() => onClickContinue('Login')} />
      </View>

    </SafeAreaView>
  );
};

export default SignUp; 