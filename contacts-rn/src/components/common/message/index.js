import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import color from "../../../assets/themes/color";
import styles from "./styles";

const Message = ({
  disabled,
  onDismiss,
  primary,
  retry,
  retryFunc,
  danger,
  message,
  info,
  success,
}) => {
  const [userDismissid, setUserDismissid] = useState(false);
  return (
    <>
      {userDismissid ? null : (
        <TouchableOpacity
          style={[
            styles.wrapper,
            {
              backgroundColor: primary
                ? color.grey
                : danger
                ? color.danger
                : color.success,
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width:"95%",
            }}
          >
            <Text style={{ color: "#fff" }}>{message}</Text>
            {retry && !typeof onDismiss === "function" && (
              <TouchableOpacity onPress={retryFunc}>
                <Text style={{ color: "#fff" }}>retry</Text>
              </TouchableOpacity>
            )}
            {typeof onDismiss === "function" && (
              <TouchableOpacity
                onPress={() => {
                  setUserDismissid(true);
                  onDismiss();
                }}
              >
                <Text style={{ color: "#fff" }}>-X-</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;
