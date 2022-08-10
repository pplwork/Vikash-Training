import {View, Image, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Container from '../common/container';
import Input from '../common/input';
import CustomButton from '../common/CustomButton';
import styles from './style.js';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';
import Message from '../common/message';

const RegisterComp = ({errors, form, onChange, onSubmit, loading, error}) => {
  const {navigate} = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  return (
    <Container>
      <Image
        style={[styles.logoImage, {height: 100, width: 100}]}
        source={require('../../assets/images/logo.png')}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Welcome to the contact Club</Text>
        <Text style={styles.subtitle}>Create your account</Text>
        <View style={styles.form}>
          {error?.error && (
            <Message
              message={error.error}
              onDismiss={() => console.log('retry register')}
              retry
              // retryFunc={() => console.log('retry register')}
              danger
            />
          )}
          <Input
            value={form.username}
            errors={errors.username || error?.username?.[0]}
            iconPosition="right"
            label="Username"
            setValue={value => onChange({name: 'username', value})}
          />
          <Input
            value={form.firstname}
            errors={errors.firstname || error?.first_name?.[0]}
            iconPosition="right"
            label="First Name"
            setValue={value => onChange({name: 'firstname', value})}
          />
          <Input
            value={form.lastname}
            errors={errors.lastname || error?.last_name?.[0]}
            iconPosition="right"
            label="Last Name"
            setValue={value => onChange({name: 'lastname', value})}
          />
          <Input
            value={form.email}
            errors={errors.email || error?.email?.[0]}
            iconPosition="right"
            label="Email"
            setValue={value => onChange({name: 'email', value})}
          />
          <Input
            value={form.password}
            icon={<Text>hi</Text>}
            errors={errors.password || error?.password?.[0]}
            iconPosition="right"
            label="Password"
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            setValue={value => onChange({name: 'password', value})}
          />
          <CustomButton loading={loading} title="Submit" onPress={onSubmit} />
        </View>
        <TouchableOpacity
          style={styles.registers}
          onPress={() => navigate(LOGIN)}>
          <Text>
            Have an account? <Text style={styles.linkbtn}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default RegisterComp;
