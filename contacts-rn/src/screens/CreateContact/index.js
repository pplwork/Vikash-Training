import {View, Text} from 'react-native';
import React, {useContext, useState, useRef, useEffect} from 'react';
import CreateContactsComp from '../../components/createContact';
import {GlobalContext} from '../../context/Provider';
import createContacs from '../../context/actions/contacts/createContacs';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CONTACT_DETAILS, CONTACT_LIST} from '../../constants/routeNames';
import uploadImage from '../../helpers/uploadImage';
import CountyCode from '../../utils/countryCodes';
import editContacts from '../../context/actions/contacts/editContacts';

const CreateContact = () => {
  const {navigate, setOptions} = useNavigation();
  const {params} = useRoute();

  const {
    contactsDispatch,
    contactsState: {
      createContacts: {loading, error, data},
    },
  } = useContext(GlobalContext);

  const sheetRef = useRef(null);
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

  const [localFile, setLocalFile] = useState('');
  const [form, setForm] = useState({country_code: 91, isFavorite: false});

  useEffect(() => {
    if (params?.contact) {
      console.log('params.contact', params?.contact);
      setOptions({title:"update contact"})
      
      const {
        first_name: firstName,
        phone_number: phoneNumber,
        last_name: lastName,
        country_code,
      } = params?.contact;
      setForm(prev => {
        return {
          ...prev,
          phoneNumber,
          lastName,
          firstName,
        };
      });

      const country = CountyCode.find(item => {
        return item.value.replace('+', '') === country_code;
      });

      console.log('country', country);

      if (country) {
        setForm(prev => {
          return {
            ...prev,
            country_code: country.key.toUpperCase(),
          };
        });
      }

      if (params?.contact.contact_picture) {
        setLocalFile(params?.contact.contact_picture);
      }
    }
  }, []);

  const [uploading, setUploading] = useState(false);
  const [isFavoutire, setIsFavoutire] = useState(false);
  const onCahngeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {

    if (params?.contact) {
      if (localFile?.size) {
        console.log('localFile uploading...', localFile);
        setUploading(true);
        uploadImage(localFile)(url => {
          setUploading(false);
          editContacts(
            {...form, contactPicture: url},
            params?.contact.id,
          )(contactsDispatch)((item) => {
            navigate(CONTACT_DETAILS, {item});
          });
        })(error => {
          console.log('error', error);
          setUploading(false);
        });
      } else {
        editContacts(form, params?.contact.id)(contactsDispatch)((item) => {
          navigate(CONTACT_DETAILS, {item});
        });
        setUploading(false);
      }
      return;
    }

    if (localFile?.size) {
      console.log('localFile uploading...', localFile);
      setUploading(true);
      uploadImage(localFile)(url => {
        setUploading(false);
        createContacs({...form, contactPicture: url})(contactsDispatch)(() => {
          navigate(CONTACT_LIST);
          console.log('redirecting... back');
        });
      })(error => {
        console.log('error', error);
        setUploading(false);
      });
    } else {
      createContacs(form)(contactsDispatch)(() => {
        navigate(CONTACT_LIST);
        console.log('redirecting... back');
      });
    }
  };

  const toggleValueChange = () => {
    setForm({...form, isFavorite: !form.isFavorite});
  };

  const onFileSelected = images => {
    closeSheet();
    console.log('images', images);
    setLocalFile(images);
  };

  return (
    <CreateContactsComp
      onCahngeText={onCahngeText}
      onSubmit={onSubmit}
      setForm={setForm}
      form={form}
      loading={loading || uploading}
      error={error}
      toggleValueChange={toggleValueChange}
      sheetRef={sheetRef}
      closeSheet={closeSheet}
      openSheet={openSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
    />
  );
};

export default CreateContact;
