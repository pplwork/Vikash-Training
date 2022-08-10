import {Image, View, Text, Switch, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles.js';
import Container from '../common/container/index.js';
import CustomButton from '../common/CustomButton';
import Input from '../common/input/index.js';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import color from '../../assets/themes/color.js';
import ImagePicker from '../common/ImagePicker';

const CreateContactsComp = ({
  onCahngeText,
  form,
  onSubmit,
  setForm,
  loading,
  error,
  toggleValueChange,
  sheetRef,
  openSheet,
  closeSheet,
  onFileSelected,
  localFile,
}) => {
  const [countryCode, setCountryCode] = useState('IN');
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);
  const onSelect = country => {
    const phoneCode = country.callingCode[0];
    setCountryCode(country.cca2);
    setCountry(country);
    setForm({...form, country_code: phoneCode});
  };

  return (
    <View style={styles.container}>
      <Container>
        <Image
          source={{uri: localFile?.path|| localFile || DEFAULT_IMAGE_URI}}
          style={styles.imageView}
        />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.choose}>Coose Image</Text>
        </TouchableOpacity>
        <Input
          label="First name"
          setValue={value => {
            onCahngeText({name: 'firstName', value: value});
          }}
          value={form.firstName || ''}
          placeholder="Enter firstname"
          errors={error?.first_name?.[0]}
        />
        <Input
          label="last name"
          setValue={value => {
            onCahngeText({name: 'lastName', value: value});
          }}
          value={form.lastName || ''}
          placeholder="Enter lastname"
          errors={error?.last_name?.[0]}
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
                withCallingCodeButton: true,
                withEmoji,
                onSelect,
              }}
            />
          }
          label="phone number"
          // placeholder="enter your number"
          onChangeText={value => {
            onCahngeText({name: 'phoneNumber', value: value});
          }}
          errors={error?.phone_number?.[0]}
          value={form.phoneNumber || ''}
        />
        <View style={styles.isFavourite}>
          <Text style={{fontSize: 15}}> Add to favourites</Text>
          <Switch
            trackColor={{false: '#767577', true: color.primary}}
            thumbColor={form.isFavorite ? '#fff' : '#fff'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleValueChange}
            value={form.isFavorite}
          />
        </View>
        <CustomButton
          onPress={() => {
            onSubmit();
          }}
          primary
          title="Submit"
          loading={loading}
        />
      </Container>
      <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
    </View>
  );
};

export default CreateContactsComp;
