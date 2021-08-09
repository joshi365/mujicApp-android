// import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import LoginPage from './src/containers/login/LoginPage';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Signup from './src/containers/signUp/Signup';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => null,
          }}>
          <Stack.Screen name="Home" component={LoginPage} />
          <Stack.Screen name="signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
