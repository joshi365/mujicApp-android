// import 'react-native-gesture-handler';
import React from 'react';
import LoginPage from './src/containers/login/LoginPage';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Signup from './src/containers/signUp/Signup';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import MujicList from './src/containers/MujicList/MujicList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import setAuthToken from './src/utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import {set_current_user} from './src/redux/actions/authAction';

const Stack = createStackNavigator();

const App = () => {
  
  setTimeout(async() => {
    const token = await AsyncStorage.getItem('auth-key');
    if(token){
      setAuthToken(token);
      const decoded = jwt_decode(token);
      store.dispatch(set_current_user(decoded));
    }
  }, 10);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => null,
          }}>
          <Stack.Screen name="Home" component={LoginPage} />
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="mujic_list" component={MujicList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
