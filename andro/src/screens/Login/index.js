import { useCallback, useContext, useEffect, useState } from "react";
import LoginComponent from "../../components/login/Login";
import {
  useNavigation,
  useFocusEffect,
  useRoute,
} from "@react-navigation/native";
import { GlobalContext } from "../../context/Provider";
import login from "../../context/actions/auth/login";

const Login = () => {
  const { navigate } = useNavigation();
  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
  const { params } = useRoute();
  console.log("params-ps", params);
  const [errors, setError] = useState({});

  useEffect(() => {
    if (params?.data) {
      setForm({ ...form, username: params.data.username });
      setJustSignedUp(true);
    }
    console.log("ooga wooga", params?.data);
  }, [params?.data]);

  const {
    authDispatch,
    authState: { error, loading, data },
  } = useContext(GlobalContext);

  const onChange = ({ name, value }) => {
    setJustSignedUp(false)
    setForm({ ...form, [name]: value });
  };

  const onSubmit = () => {
    if (form.username || form.password) {
      login(form)(authDispatch);
    }
  };
  return (
    <LoginComponent
      justSignedup={justSignedUp}
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      loading={loading}
      // error={error}        //trowing error
    />
  );
};

export default Login;
