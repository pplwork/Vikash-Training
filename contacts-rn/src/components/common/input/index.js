import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import color from "../../../assets/themes/color";

const Input = ({
  value,
  setValue,
  iconPosition,
  icon,
  style,
  label,
  errors,
  showPassword,
  setShowPassword,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          {
            alignItems: "center",
            flexDirection: iconPosition == "right" ? "row-reverse" : "row",
            borderColor: focused
              ? color.primary
              : errors
              ? color.danger
              : color.grey,
          },
        ]}
      >
        <View>
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {icon && icon}
          </TouchableOpacity>
        </View>
        <TextInput
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          secureTextEntry={showPassword}
          style={[styles.textInput, style]}
          onChangeText={setValue}
          value={value}
          {...props}
        />
      </View>
      {errors && <Text style={styles.error}>{errors}</Text>}
    </View>
  );
};

export default Input;
