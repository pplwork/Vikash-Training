import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import Container from '../common/container';
import styles from './styles';
import ImageComponent from './ImageComponent';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import colors from '../../assets/themes/color';
import CustomButton from '../common/CustomButton';
import ImagePicker from '../common/ImagePicker';
import {useNavigation} from '@react-navigation/native';
import {CREACTE_CONTACTS} from '../../constants/routeNames';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const ContactDetails = ({
  contact,
  openSheet,
  sheetRef,
  onFileSelected,
  localFile,
  closeSheet,
  uploadSucceeded,
  updatingImage,
}) => {
  const {
    contact_picture,
    country_code,
    first_name,
    is_favorite,
    last_name,
    phone_number,
  } = contact;

  console.log(
    'contact',
    contact_picture,
    country_code,
    first_name,
    is_favorite,
    last_name,
    phone_number,
  );

  const {navigate} = useNavigation();

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {(contact_picture || uploadSucceeded) && (
          <ImageComponent src={contact_picture || localFile?.path} />
        )}
        {!contact_picture && !uploadSucceeded && (
          <View style={{alignItems: 'center', paddingVertical: 20}}>
            <Image
              width={150}
              height={150}
              source={{uri: localFile?.path || DEFAULT_IMAGE_URI}}
              style={styles.imageView}
            />

            <TouchableOpacity
              onPress={() => {
                openSheet();
              }}>
              <Text style={{color: colors.primary}}>
                {' '}
                {updatingImage ? 'updating...' : 'Add picture'}{' '}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.content}>
          <Text style={styles.names}>{first_name + ' ' + last_name}</Text>
        </View>
        <View style={styles.hrLine} />
        <View style={styles.topCallOptions}>
          <TouchableOpacity style={styles.topCallOption}>
            <MaterialIcons
              name="call"
              size={20}
              style={{fontWeight: 400, color: '#000'}}
            />

            <Text style={styles.middleText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <MaterialIcons
              name="message"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Text</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <MaterialIcons
              name="camera"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Video</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.middleCallOptions}>
          <MaterialIcons name="call" color={colors.grey} size={27} />
          <View style={styles.phoneMobile}>
            <Text>{phone_number}</Text>
            <Text>Mobile</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcons
              name="place"
              color={colors.primary}
              size={27}
            />
            <MaterialIcons
              name="sms"
              color={colors.primary}
              size={27}
              style={[styles.msgIcon]}
            />
          </View>
        </View>
        <CustomButton
          style={{alignSelf: 'flex-end', marginRight: 20, width: 200}}
          primary
          title="Edit Contact"
          onPress={() => navigate(CREACTE_CONTACTS, {contact, editing: true})}
        />
      </View>
      <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
    </ScrollView>
  );
};

export default ContactDetails;
