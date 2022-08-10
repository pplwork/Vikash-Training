import { View, Button, FlatList, Alert, TextInput } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


const Landing = () => {
  const navigation = useNavigation();

  
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default Landing;
