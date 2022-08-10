import React, {useContext, useEffect, useState} from 'react';
import LoginComponent from '../../components/Login';
import {useNavigation, useRoute} from '@react-navigation/native';
import {GlobalContext} from '../../context/Provider';
import login from '../../context/actions/auth/login';

const Login = () => {
  const [form, setForm] = useState({});
  const [justsignedup, setJustsignedup] = useState(false);
  const {params} = useRoute();
  const {navigate} = useNavigation();
  useEffect(() => {
    if (params?.data) {
      setJustsignedup(true);
      setForm({...form, username: params.data.username});
    }
  }, [params]);
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setJustsignedup(false)
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    if (form.username || form.password) {
      login(form)(authDispatch);
    }
  };
  return (
    <LoginComponent
      form={form}
      onChange={onChange}
      loading={loading}
      error={error}
      onSubmit={onSubmit}
      justsignedup={justsignedup}
    />
  );
};

export default Login;
