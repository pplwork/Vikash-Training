import {View, Text, TouchableOpacity} from 'react-native';
import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ContactComponent from '../../components/ContactComponent';
import {GlobalContext} from '../../context/Provider';
import getContacts from '../../context/actions/contacts/getContacts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CONTACT_DETAILS} from '../../constants/routeNames';

const Contacts = () => {
  const {navigate} = useNavigation();
  const [sortBy, setSortBy] = useState(null);
  const {setOptions, toggleDrawer} = useNavigation();
  const [visible, setVisible] = useState(false);
  const contactRef = useRef([]);
  const {
    contactsState: {
      getContacts: {data, loading},
    },
    contactsDispatch,
  } = useContext(GlobalContext);

  useEffect(() => {
    const prev = contactRef.current;
    contactRef.current = data;

    const newList = contactRef.current;
    if (newList.length - prev.length === 1) {
      const newContact = newList.find(
        item => !prev.map(i => i.id).includes(item.id),
      );

      navigate(CONTACT_DETAILS, {item: newContact});
    }
  }, [data.length]);

  const getSettings = async () => {
    try {
      const sortPref = await AsyncStorage.getItem('sortBy');
      if (sortPref) {
        setSortBy(sortPref);
      }
      console.log('sortby', sortBy);
    } catch (error) {
      console.log('error', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getSettings();
    }, []),
  );

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <MaterialIcons
            name="menu"
            size={25}
            style={{padding: 10}}></MaterialIcons>
        </TouchableOpacity>
      ),
    });

    getContacts()(contactsDispatch);
  }, []);

  return (
    <ContactComponent
      data={data}
      loading={loading}
      visible={visible}
      setVisible={setVisible}
      sortBy={sortBy}
    />
  );
};

export default Contacts;
