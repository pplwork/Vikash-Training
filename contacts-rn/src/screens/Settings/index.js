import React, {useEffect, useState} from 'react';
import SettingsComp from '../../components/SettingsComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {
  const [email, setEmail] = useState(null);
  const [visible, setVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);

  const getSettings = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      setEmail(JSON.parse(user).email);
      const sortPref = await AsyncStorage.getItem('sortBy');
      if (sortPref) {
        setSortBy(sortPref);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const saveSetting = async(key, value) => {
    await AsyncStorage.setItem(key, value);
  };

  useEffect(() => {
    getSettings();
  }, []);

  const settingOptions = [
    {title: 'My info', subtitle: 'Setup your profile', onPress: () => {}},
    {title: 'Accounts', subtitle: null, onPress: () => {}},
    {
      title: 'Default account for new contacts',
      subtitle: email,
      onPress: () => {},
    },
    {
      title: 'Contats to display',
      subtitle: 'All contacts',
      onPress: () => {},
    },
    {title: 'Name format', subtitle: 'First name first', onPress: () => {}},
    {
      title: 'Sort by',
      subtitle: sortBy,
      onPress: () => {
        setVisible(true);
      },
    },
    {title: 'Import', subtitle: null, onPress: () => {}},
    {title: 'Export', subtitle: null, onPress: () => {}},
    {title: 'Blocke number', subtitle: null, onPress: () => {}},
    {title: 'About Rcontact', subtitle: null, onPress: () => {}},
  ];

  const preferenceArr = [
    {
      name: 'First name',
      selected: sortBy == 'Firstname',
      onPress: () => {
        saveSetting('sortBy', 'Firstname');
        setSortBy('Firstname');
        setVisible(false)
      },
    },
    {
      name: 'Last name',
      selected: sortBy == 'Lastname',
      onPress: () => {
        saveSetting('sortBy', 'Lastname');
        setSortBy('Lastname');
        setVisible(false)
      },
    },
  ];
  return (
    <SettingsComp
      settingOptions={settingOptions}
      visible={visible}
      setVisible={setVisible}
      preferenceArr={preferenceArr}
    />
  );
};

export default Settings;
