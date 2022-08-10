import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Container from '../../components/common/container';
import React from 'react';
import styles from './style';
import {SETTINGS} from '../../constants/routeNames';
import logout from '../../context/actions/auth/logout';
import {DevSettings} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Sidemenu = ({navigation, authDispatch}) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout', 'Are you shure you want to logout?', [
      {text: 'Cancel', onPress: () => {}},
      {text: 'OK', onPress: () => logout()(authDispatch)},
    ]);

    // DevSettings.reload();
  };
  const menuItems = [
    {
      icon: (
        <MaterialIcons
          name="settings"
          size={20}
          style={{fontWeight: 400, color: '#000'}}
        />
      ),
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: (
        <MaterialIcons
          name="logout"
          size={20}
          style={{fontWeight: 400, color: '#000'}}
        />
      ),
      name: 'Logout',
      onPress: () => handleLogout(),
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <Image
          style={[styles.logoImage, {height: 100, width: 100}]}
          source={require('../../assets/images/logo.png')}
        />
        <View style={{paddingHorizontal: 70}}>
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity style={styles.item} key={name} onPress={onPress}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default Sidemenu;
