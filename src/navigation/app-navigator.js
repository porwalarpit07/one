/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from '../appRedux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/UserManagement/Login/login'
import  SignUp  from "../screens/UserManagement/SignUp/signup";
import Assessment from '../screens/assessment/index';
function AppNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SignUp">
                    <Stack.Screen
                        name="LoginScreen"
                        component={LoginScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
                    <Stack.Screen name='Assessment' component={Assessment} options={{ headerShown: false }} />

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}


export default AppNavigator;
