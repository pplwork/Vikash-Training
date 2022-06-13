import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux/es/exports";

const Lap = () => {
  
  const { lap } = useSelector((state) => state.watch);

  return (
    <View style={styles.btn}>
      {lap.length &&
        lap.map((element, i) => (
          <Text key={i} style={styles.lap}>{Math.round((element/100).toFixed(1)/10)+":"+element%100+" s"}</Text>
        ))}
    </View>
  );
};

export default Lap;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    width: "100%",
    height: '100%',
    backgroundColor: "#ffe4db",
    color: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  lap: {
    textShadowOffset: { width: 1, height: 1 },
    textShadowColor: '#000',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4b0063',
    fontSize: 20,
    textDecorationLine: 'underline',
    lineHeight: 40
  }
});