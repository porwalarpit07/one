
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { SafeAreaView, ImagePath, AppButton, AppInputText } from '@alias';
import { Text, View, Alert, FlatList, Keyboard, TouchableOpacity } from 'react-native';
import { ProximaNovaFontbold } from '../../../styles/typography';

const SignUp = (props) => {
  const [userMobileNumber, setUserMobileNumber] = useState()
  const [userPassword, setUserPassword] = useState()
  const [userEmail, setUserEmail] = useState()
  const [userFullNmae, setUserFullNmae] = useState()
  const [userdata, setUserData] = useState([])

  const onClickContinue = () => {
    Keyboard.dismiss()
    let data = {
      fullName: userFullNmae,
      email: userEmail,
      mobileNumber: userMobileNumber,
      password: userPassword
    }
    console.log('user data =======', data);
    props.navigation.navigate('LoginScreen')
  }

  const getApiData = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {})
      .then(response => response.json())
      .then((res) => { setUserData(res), console.log('res===========', res) })
      .catch((err) => {
        console.log('err=========', err);
      })
  }

  // add(6,7).then(sum => console.log(sum));

//   const sumValue = (6, 7)=> {
//   return add(6, 7).then(()=>{
//     let a =  6+ 7 
//     console.log('a ==========', a);
//   })
//     .catch((error) => {
 
//     })

// }

// function init() {
//   var name = 'Naresh'
//   function displayName (){
//     console.log(name);
//   }
//   displayName()
// }

useEffect(() => {
  // init()
  // getApiData()
  // let x = [2, 4, 6];
  // let temparr = []
  // output: [{x: 2}, {x: 4}, {x: 6}]
  // x.map((item) => {
  //   temparr.push({ X: item })

  // })
  // console.log("tempar============r", temparr);

}, [])



const renderItem = ({ item }) => {
  console.log('item========', item);
  return (
    <View style={{ backgroundColor: '#FFFFFF', width: '90%', }}>
      <Text>{item?.title}</Text>
      <Text>{item?.body}</Text>
    </View>
  )
}




return (
  <SafeAreaView style={styles.container}>
    <View style={styles.upperHeadingText}>
      <Text style={styles.BoldText}>{`Please SignUp here`}</Text>
    </View>
    {/* <FlatList
        data={userdata}
        renderItem={(item)=>renderItem(item)} /> */}
    <View style={styles.mainContainer}>
        <Text style={styles.BoldText}>{`Sign Up`}</Text>
        <AppInputText
          placeholder='Email'
          imagepassword={ImagePath.userIcon}
          value={userEmail}
          onChangeText={(value) => setUserEmail(value)}
        />
         <AppInputText
          placeholder='Full Name'
          imagepassword={ImagePath.userIcon}
          value={userFullNmae}
          onChangeText={(value) => setUserFullNmae(value)}
        />

        <AppInputText
          placeholder='91902400000'
          imagepassword={ImagePath.userIcon}
          maxLength={10}
          value={userMobileNumber}
          onChangeText={(value) => setUserMobileNumber(value)}
        />

        <AppInputText
          placeholder='Password'
          imagepassword={ImagePath.userIcon}
          secureTextEntry={true}
          maxLength={8}
          value={userPassword}
          onChangeText={(value) => setUserPassword(value)}
        />
        
        <AppButton
          onpress={() => onClickContinue('Login')} />
      </View> 

  </SafeAreaView>
);
};

export default SignUp; 