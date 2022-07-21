import { useCallback, useContext, useEffect, useState } from "react";
import RegisterComponent from "../../components/signUp/SignUp";
import env from "../../config/env";
import instance from "../../helpers/axiosInterceptor";
import register from "../../context/actions/auth/register";
import { clearAuthState } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { LOGIN } from "../../constants/routeNames";

const Register = () => {
  const { navigate } = useNavigation();
  const [form, setForm] = useState({});
  const [errors, setError] = useState({});
  const { DEV_BACKEND_URL } = env;
  const {
    authDispatch,
    authState: { error, loading, data },
  } = useContext(GlobalContext);

  console.log("data-obj", data);

  // useFocusEffect(()=>{
  //   useCallback(()=>{
  //   if (data !== null|| data|| data !== undefined|| error) {
  //     clearAuthState()(authDispatch)
  //   }
  //   },[data,error])
  // })

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    if (value !== null) {
      //for password only
      if (name === "password") {
        if (value.length < 4) {
          setError((prev) => {
            return { ...prev, [name]: "Please more than four length password" };
          });
        } else {
          return setError((prev) => {
            return { ...prev, [name]: null };
          });
        }
      }
      setError((prev) => {
        return { ...prev, [name]: null };
      });
    } else {
      setError((prev) => {
        return { ...prev, [name]: "Please fill this field" };
      });
    }
  };

  const onSubmit = () => {
    console.log("form", form);

    if (!form.username || form.username === "") {
      setError((prev) => {
        return { ...prev, username: "please fill username" };
      });
    }
    if (!form.fullname) {
      setError((prev) => {
        return { ...prev, fullname: "please fill fullname" };
      });
    }
    if (!form.email) {
      setError((prev) => {
        return { ...prev, email: "please fill email" };
      });
    }
    if (!form.password) {
      setError((prev) => {
        return { ...prev, password: "please fill password" };
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item || null)
    ) {
      register(form)(authDispatch)((response) => {
        navigate(LOGIN, {data:response});
      });
    }
  };

  useEffect(() => {}, []);
  return (
    <RegisterComponent
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      // error={error}        //trowing error
      loading={loading}
    />
  );
};

export default Register;
