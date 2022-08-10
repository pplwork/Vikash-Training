import {View, Text, ActivityIndicator} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {GlobalContext} from '../../context/Provider';
import logout from '../../context/actions/auth/logout';

const LogOut = () => {
  const {authDispatch} = useContext(GlobalContext);

  useEffect(() => {
    logout()(authDispatch);
  }, []);
  return <ActivityIndicator />;
};

export default LogOut;
