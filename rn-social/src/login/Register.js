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
// import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { register } from "../redux/actions/userActions";

const Register = () => {

  const dispatch= useDispatch()

  const [userData, setUserData] = useState({
    password: "",
    email: "",
    name: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  // const navigation = useNavigation();

  // useEffect(() => {
  //   console.log(userData.name);
  // }, [userData.name]);

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ marginVertical: 10, marginHorizontal: "auto" }}>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>Instagram</Text>
        </View>
        <View
          style={{
            marginVertical: 15,
            width: "80%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#999", fontSize: 20, textAlign: "center" }}>
            Sign up to see photos and videos from your friends
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#4f8dff",
            padding: 15,
            marginVertical: 15,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "85%",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: 600 }}>
            Log In with Facebook
          </Text>
        </TouchableOpacity>
        <View
          style={{ marginVertical: 5, marginHorizontal: "auto", width: "85%" }}
        >
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
                style={{ width: "45%", height: 1, backgroundColor: "#999" }}
              ></View>
              <View
                style={{
                  marginHorizontal: 10,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#999" }}>OR</Text>
              </View>
              <View
                style={{ width: "45%", height: 1, backgroundColor: "#999" }}
              ></View>
            </View>
          </View>
        </View>
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
            placeholder="Email"
            onChangeText={(email) => setUserData({ ...userData, email })}
          />
        </View>
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
            placeholder="Full Name"
            onChangeText={(name) => setUserData({ ...userData, name })}
          />
        </View>
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
            placeholder="Username"
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
            placeholder="Password"
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
            onPress={() => dispatch(register(userData))}
            style={{
              backgroundColor: "#4f8dff",
              padding: 15,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: 600 }}>Sign Up</Text>
          </TouchableOpacity>
          <View
            style={{
              marginVertical: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#45453e" }}>
              By signing up, you agree to our
            </Text>
            <TouchableOpacity
              style={{
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#45453e", fontWeight: "bold" }}>
                Terms & Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        ></View>
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

export default Register;
