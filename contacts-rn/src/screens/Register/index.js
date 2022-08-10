import {View, Text} from 'react-native';
import React, {useEffect, useState, useContext, useCallback} from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import RegisterComp from '../../components/Register';
import envs from '../../config/env';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';
import {LOGIN} from '../../constants/routeNames';

const Register = () => {
  const {navigate} = useNavigation();
  const [form, setForm] = useState({});
  const [errors, setError] = useState({});
  const {DEV_BACKEND_URL} = envs;
  const {
    authDispatch,
    authState: {loading, error, data},
  } = useContext(GlobalContext);

  useFocusEffect(
    useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== null && value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setError(prev => {
            return {...prev, [name]: 'password length must be grater than 6'};
          });
        } else {
          setError(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setError(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setError(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    if (!form.username || form.username === '') {
      setError(prev => {
        return {...prev, username: 'username is required'};
      });
    }
    if (!form.firstname) {
      setError(prev => {
        return {...prev, firstname: 'firstname is required'};
      });
    }
    if (!form.lastname) {
      setError(prev => {
        return {...prev, lastname: 'lastname is required'};
      });
    }
    if (!form.email) {
      setError(prev => {
        return {...prev, email: 'email is required'};
      });
    }
    if (!form.password) {
      setError(prev => {
        return {...prev, password: 'password is required'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch)((response) => {
        navigate(LOGIN, {data:response});
      });
    }
  };
  return (
    <RegisterComp
      error={error}
      loading={loading}
      errors={errors}
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default Register;
