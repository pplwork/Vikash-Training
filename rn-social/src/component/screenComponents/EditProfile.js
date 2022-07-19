import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
  Alert,
} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import React from "react";

const EditProfile = ({ route, navigation }) => {
  const { name, accountName, postImage, following, followers, posts } =
    route.params;

  const TostMessage = () => {
    // ToastAndroid.show("Edited Sucessfully !", ToastAndroid.SHORT);
    Alert.alert(
      "Login Failed",
      "Multiple Logins Are Found. \n Logout From All Other Devices to Continue.",
      [
        {
          text: "Proceed ?",
          onPress: () => {},
        },
        {
          text: "No",
          onPress: () => {},
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 10,
          marginHorizontal: 8,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{ fontSize: 35 }} />
        </TouchableOpacity>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Edit Profile
        </Text>

        <TouchableOpacity
          onPress={() => {
            TostMessage();
            navigation.goBack();
          }}
        >
          <Ionic name="checkmark" style={{ fontSize: 35, color: "cyan" }} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 150,
            width: 150,
          }}
        >
          <Image
            source={postImage}
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          />
        </View>
        <TouchableOpacity
          style={{
            marginVertical: 5,
          }}
        >
          <Text style={{ color: "blue" }}>Change Profile Photo</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            marginVertical: 5,
          }}
        >
          <Text
            style={{
              opacity: 0.7,
            }}
          >
            Name
          </Text>
          <TextInput
            defaultValue={name}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: "#cdcdcd",
            }}
          />
        </View>
        <View
          style={{
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              opacity: 0.7,
            }}
          >
            Username
          </Text>
          <TextInput
            defaultValue={accountName}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: "#cdcdcd",
            }}
          />
        </View>
        <View
          style={{
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              opacity: 0.7,
            }}
          >
            Website
          </Text>
          <TextInput
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: "#cdcdcd",
            }}
          />
        </View>
        <View
          style={{
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              opacity: 0.7,
            }}
          >
            Bio
          </Text>
          <TextInput
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: "#cdcdcd",
            }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: "#3493D9",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#efefef",
          }}
        >
          Switch to personal account
        </Text>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: "#3493D9",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#efefef",
          }}
        >
          Personal information setting
        </Text>
      </View>
    </View>
  );
};

export default EditProfile;
