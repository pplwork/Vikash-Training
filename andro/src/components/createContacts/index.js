import { Image, View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./styles.js";
import CustomButton from "../common/CustomButton";
import Container from "../common/container";
import Input from "../common/input";
import CountryPicker from "react-native-country-picker-modal";
import { DEFAULT_IMAGE_URI } from "../../constants/general.js";

const CreateContactsComp = ({ onCahngeText, form, onSubmit, setForm }) => {
  const [countryCode, setCountryCode] = useState("IN");
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);
  const onSelect = (country) => {
    const phoneCode = country.callingCode[0];
    setCountryCode(country.cca2);
    setCountry(country);
    setForm({ ...form, country_code: phoneCode });
    // console.log(form)
  };

  return (
    <View style={styles.container}>
      <Container>
        <Image source={{ uri: DEFAULT_IMAGE_URI }} style={styles.imageView} />
        <Text style={styles.choose}>Coose Image</Text>

        <Input
          label="First name"
          onChangeText={(value) => {
            onCahngeText({ name: "firstName", value: value });
          }}
          placeholder="Enter firstname"
        />
        <Input
          label="last name"
          onChangeText={(value) => {
            onCahngeText({ name: "lastName", value: value });
          }}
          placeholder="Enter lastname"
        />
        {/* <Input label="phone no" placeholder="Enter phone no" /> */}
        <Input
        style={styles.input}
          icon={
            <CountryPicker
              {...{
                countryCode,
                withFilter,
                withFlag,
                withCountryNameButton: false,
                withAlphaFilter,
                withCallingCode,
                withCallingCodeButton:true,
                withEmoji,
                onSelect,
              }}
            />
          }
          label="phone number"
          // placeholder="enter your number"
          onChangeText={(value) => {
            onCahngeText({ name: "phoneNumber", value: value });
          }}
        />
        <CustomButton onPress={onSubmit} primary title="Submit" />
      </Container>
    </View>
  );
};

export default CreateContactsComp;
