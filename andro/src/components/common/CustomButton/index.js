import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import color from "../../../assets/themes/color";
import styles from "./style";

const CustomButton = ({
  title,
  loading,
  disabled,
  secondary,
  primary,
  danger,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={[
        styles.wrapper,
        {
          backgroundColor: loading
            ? color.grey
            : danger
            ? color.danger
            : color.primary,
        },
      ]}
    >
      <View>
        {loading ? (
          <ActivityIndicator
            color={primary ? color.secondary : color.primary}
          />
        ) : (
          <Text style={{ color: disabled ? "#000" : "#fff" }}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
