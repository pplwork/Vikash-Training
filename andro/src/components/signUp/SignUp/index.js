import { Image, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Container from "../../common/container";
import Input from "../../common/input";
import CustomButton from "../../common/CustomButton";
import styles from "./styles.js";
import { useNavigation } from "@react-navigation/native";
import { LOGIN } from "../../../constants/routeNames";
import Message from "../../common/message";

const RegisterComponent = ({ errors, onChange, onSubmit, error, loading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { navigate } = useNavigation();

  return (
    <Container>
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to the Club</Text>
        <Text style={styles.subtitle}>Create account</Text>
        <View style={styles.form}>
          {error && (
            <Message
              retry
              danger
              retryFunc={() => conosle.log("LOL")}
              message={error?.error}
            />
          )}
          <Input
            label="Full name"
            placeholder="Enter Full name"
            onChangeText={(value) => {
              onChange({ name: "fullname", value });
            }}
            errors={errors.fullname}
          />
          <Input
            label="last name"
            placeholder="Enter laste name"
            onChangeText={(value) => {
              onChange({ name: "lastname", value });
            }}
            errors={errors.lastname}
          />
          <Input
            label="Username"
            placeholder="Enter Username"
            onChangeText={(value) => {
              onChange({ name: "username", value });
            }}
            errors={errors.username}
          />
          <Input
            label="Email"
            placeholder="Enter Email"
            onChangeText={(value) => {
              onChange({ name: "email", value });
            }}
            errors={errors.email}
          />
          <Input
            icon={<Text>Hi</Text>}
            iconPosition="right"
            label="Password"
            secureTextEntry={showPassword}
            placeholder="Enter Password"
            setShowPassword={setShowPassword}
            onChangeText={(value) => {
              onChange({ name: "password", value });
            }}
            errors={errors.password}
          />

          <CustomButton
            primary
            title="Submit"
            onPress={onSubmit}
            loading={loading}
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an Account?</Text>
            <TouchableOpacity onPress={() => navigate(LOGIN)}>
              <Text style={styles.linkbtn}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
