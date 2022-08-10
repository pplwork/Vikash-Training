import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Container from "../../common/container";
import Input from "../../common/input";
import CustomButton from "../../common/CustomButton";
import styles from "./styles.js";
import { useNavigation } from "@react-navigation/native";
import { REGISTER } from "../../../constants/routeNames";
import Message from "../../common/message";

const LoginComponent = ({
  form,
  errors,
  onChange,
  onSubmit,
  loading,
  justSignedup,
}) => {
  const [value, setValue] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const { navigate } = useNavigation();

  return (
    <Container>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.logoImage}
      />
      {/* <Text>FI GFORM Login</Text> */}

      <View>
        <Text style={styles.title}>Welcome to the Club</Text>
        <Text style={styles.subtitle}>login below</Text>
        {justSignedup && (
          <Message
            success
            message="Account creted Successfully"
            onDismiss={() => {}}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        )}
        {errors && errors?.errors && (
          <Message
            success
            message="invalid credentials"
            onDismiss={() => {}}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        )}
        <View style={styles.form}>
          <Input
            label="Username"
            value={form?.username}
            placeholder="Enter Username"
            // error={"please fill this field"}
            errors={errors?.username?.[0]}
            onChangeText={(value) => {
              onChange({ name: "username", value });
            }}
          />
          <Input
            icon={<Text>Hi</Text>}
            iconPosition="right"
            label="Password"
            secureTextEntry={showPassword}
            placeholder="Enter Password"
            setShowPassword={setShowPassword}
            // error={"please fill this field"}
            errors={errors?.password?.[0]}
            onChangeText={(value) => {
              onChange({ name: "password", value });
            }}
          />

          <CustomButton
            disabled={loading}
            title="Submit"
            onPress={onSubmit}
            loading={loading}
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new Account?</Text>
            <TouchableOpacity onPress={() => navigate(REGISTER)}>
              <Text style={styles.linkbtn}> Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
