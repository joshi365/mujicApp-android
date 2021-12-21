import React, {useState} from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LoginForm from '../../components/loginComp/LoginForm';
import {userLogin} from '../../redux/actions/authAction';

const LoginPage = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const getLoginError = useSelector(state => state.authReducer.loginError);

  const onClickHandler = () => {
    navigation.navigate('signup');
  };

  const showLoader = () => setLoading(true);
  const removeLoader = () => setLoading(false);

  var pattern = /^[0-9]{10}$/;

  const onSubmitHandler = () => {
    if (!pattern.test(number)) {
      ToastAndroid.showWithGravityAndOffset(
        'incorrect number format',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        0,
        5,
      );
    }

    if (password.length < 6) {
      ToastAndroid.showWithGravityAndOffset(
        'password lenght shoud be 6 or more',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        0,
        5,
      );
    }

    if (password.length >= 6 && pattern.test(number)) {
      const formdata = {
        number: number,
        password: password,
      };
      dispatch(userLogin(formdata, navigation, showLoader, removeLoader));
    }
  };

  return (
    <View style={styles.container}>
      <LoginForm
        onClickHandler={onClickHandler}
        onSubmitHandler={onSubmitHandler}
        setNumber={setNumber}
        setPassword={setPassword}
        isLoading={isLoading}
      />
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
