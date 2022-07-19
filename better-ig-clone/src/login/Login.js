import {
  Text,
  View,
  Button,
  FlatList,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase.config";

const Login = () => {
  const [userData, setUserData] = useState({ password: "", email: "" });
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // console.log(userData);
  }, [userData]);

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <View style={{ marginVertical: 15, marginHorizontal: "auto" }}>
        <Text style={{ color: "#45453e" }}>English (United States)</Text>
      </View>
      <View style={{ marginVertical: 15, marginHorizontal: "auto" }}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Instagram</Text>
      </View>
      <View
        style={{ marginVertical: 10, marginHorizontal: "auto", width: "85%" }}
      >
        <View
          style={{
            marginVertical: 10,
          }}
        >
          <TextInput
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: "#999",
              fontSize: 15,
            }}
            placeholder="Enter Your Email"
            onChangeText={(email) => setUserData({ ...userData, email })}
          />
        </View>
        <View
          style={{
            marginVertical: 15,
            position: "relative",
          }}
        >
          <TextInput
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: "#999",
              fontSize: 15,
            }}
            placeholder="Enter Your Password"
            secureTextEntry={showPassword ? false : true}
            onChangeText={(password) => setUserData({ ...userData, password })}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{ position: "absolute", top: "25%", right: 10, zIndex: 10 }}
          >
            <Text>Eye</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: 15,
          }}
        >
          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={{
              backgroundColor: "#4f8dff",
              padding: 15,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: 600 }}>Log In</Text>
          </TouchableOpacity>
          <View
            style={{
              marginVertical: 15,
              marginHorizontal: "auto",
            }}
          >
            <Text style={{ color: "#45453e" }}>
              Forgot your login details?{" "}
              <TouchableOpacity>
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Get help signing In.
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#4f8dff",
              padding: 15,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: 600 }}>
              Log In with Facebook
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <View
              style={{ width: "45%", height: 1, backgroundColor: "#000" }}
            ></View>
            <View
              style={{
                marginHorizontal: 10,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>OR</Text>
            </View>
            <View
              style={{ width: "45%", height: 1, backgroundColor: "#000" }}
            ></View>
          </View>
          <TouchableOpacity
            style={{ marginVertical: 15 }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={{ color: "#45453e" }}>
              Don't have an account?{" "}
              <Text style={{ fontWeight: "bold" }}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginTop: "auto",
          marginBottom: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#45453e" }}>Instagram from Dev_Vikash</Text>
      </View>
    </View>
  );

  return (
    <View>
      <TextInput
        placeholder="Enter Your Email"
        onChangeText={(email) => setUserData({ ...userData, email })}
      />
      <TextInput
        placeholder="Enter Your Password"
        secureTextEntry={true}
        onChangeText={(password) => setUserData({ ...userData, password })}
      />
      <Button title="Log In" />
    </View>
  );
};

export default Login;
