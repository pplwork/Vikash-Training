import {
  Text,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect, useState, useRef} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import ContactDetailComp from '../../components/ContactsDetails';
import {GlobalContext} from '../../context/Provider';
import deleteContacts from '../../context/actions/contacts/deleteContacts';
import {CONTACT_LIST, CONTACT_DETAILS} from '../../constants/routeNames';
import uploadImage from '../../helpers/uploadImage';
import editContacts from '../../context/actions/contacts/editContacts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ContactsDetails = () => {
  const {navigate} = useNavigation();
  const {
    contactsDispatch,
    contactsState: {
      deleteContacts: {loading},
    },
  } = useContext(GlobalContext);

  const {setOptions} = useNavigation();
  const {params: {item = {}} = {}} = useRoute();
  console.log('item', item);
  const [localFile, setLocalFile] = useState(null);
  const [updatingImage, setUpdatingImage] = useState(false);
  const [uploading, setuploading] = useState(false);

  const sheetRef = useRef(null);

  useEffect(() => {
    if (item) {
      setOptions({
        title: item.first_name + ' ' + item.last_name,
        headerRight: () => {
          return (
            <View style={{flexDirection: 'row', paddingRight: 10}}>
              <TouchableOpacity onPress={() => {}}>
                <MaterialIcons
                  name={item.is_favorite ? 'star' : 'stars'}
                  size={25}
                  style={{fontWeight: 400, color: '#000'}}
                />
                {/* <Text>{}</Text> */}
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexDirection: 'row', paddingLeft: 10}}
                onPress={() => {
                  Alert.alert(
                    'Logout',
                    'Are you shure you want to remove ' +
                      item.first_name +
                      ' ' +
                      item.last_name,
                    [
                      {text: 'Cancel', onPress: () => {}},
                      {
                        text: 'OK',
                        onPress: () =>
                          deleteContacts(item.id)(contactsDispatch)(() =>
                            navigate(CONTACT_LIST),
                          ),
                      },
                    ],
                  );
                }}>
                {loading ? (
                  <ActivityIndicator size="small" />
                ) : (
                  <MaterialIcons
                    name="delete"
                    size={25}
                    style={{fontWeight: 400, color: '#000'}}
                  />
                )}
              </TouchableOpacity>
            </View>
          );
        },
      });
    }
  }, [item, loading]);

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const onFileSelected = images => {
    closeSheet();
    console.log('images', images);
    setLocalFile(images);
    setUpdatingImage(true);
    console.log('localFile', localFile);
    uploadImage(localFile)(url => {
      setUpdatingImage(false);

      const {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        country_code: country_code,
        is_favorite: isFavorite,
      } = item;

      editContacts(
        {
          firstName,
          lastName,
          phoneNumber,
          country_code,
          isFavorite,
          contactPicture: url,
        },
        item.id,
      )(contactsDispatch)(item => {
        // navigate(CONTACT_DETAILS, {item});
        console.log('redirecting... back');
        setuploading(true);
        setUpdatingImage(false);
      });
    })(error => {
      console.log('error', error);
      setUpdatingImage(false);
    });
  };

  return (
    <ContactDetailComp
      contact={item}
      sheetRef={sheetRef}
      closeSheet={closeSheet}
      openSheet={openSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
      updatingImage={updatingImage}
      uploadSucceeded={uploading}
    />
  );
};

export default ContactsDetails;
