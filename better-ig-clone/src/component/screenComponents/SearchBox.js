import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Ionic from 'react-native-vector-icons/Ionicons'

const SearchBox = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingVertical: 10,
        // position:'absolute',
        backgroundColor:'rgba(52, 52, 52, 0.1)',
        zIndex:10,
      }}
    >
      <Ionic name="search" style={{
        fontSize:10,
        opacity:7,
        position:'absolute',
        zIndex:1,
        left:25
      }}
      />
      <TextInput placeholder="Search"
      placeholderTextColor={"#666"}
      style={{
        borderRadius:10,
        width:'94%',
        backgroundColor:"#ccc",
        alignItems:'center',
        justifyContent:'center',
        fontSize:15,
        padding:4,
        paddingLeft:40
      }} />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({});
