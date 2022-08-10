import {View, Image, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Container from '../common/container';
import Input from '../common/input';
import CustomButton from '../common/CustomButton';
import styles from './style.js';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routeNames';
import Message from '../common/message';

const LoginComponent = ({
  form,
  onChange,
  loading,
  error,
  onSubmit,
  justsignedup,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        style={[styles.logoImage, {height: 100, width: 100}]}
        source={require('../../assets/images/logo.png')}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Welcome to the contact Club</Text>
        <Text style={styles.subtitle}>Please login below</Text>
        {justsignedup && (
          <Message
            onDismiss={() => {}}
            message={'account create successfully'}
            success
          />
        )}
        {error && (
          <Message
            onDismiss={() => {
              console.log('hello dismiss');
            }}
            message={error.detail}
            danger
          />
        )}
        <View style={styles.form}>
          <Input
            value={form.username}
            error={error?.username?.[0]}
            iconPosition="right"
            label="Username"
            setValue={value => {
              onChange({name: 'username', value});
            }}
          />
          <Input
            value={form.password}
            icon={<Text>hi</Text>}
            error={error?.password?.[0]}
            iconPosition="right"
            label="Password"
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            setValue={value => {
              onChange({name: 'password', value});
            }}
          />
          <CustomButton title="Submit" loading={loading} onPress={onSubmit} />
        </View>
        <TouchableOpacity
          style={styles.registers}
          onPress={() => navigate(REGISTER)}>
          <Text>
            Don't have an account? <Text style={styles.linkbtn}>Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default LoginComponent;
