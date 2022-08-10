import {createDrawerNavigator} from '@react-navigation/drawer';
import React, { useContext } from 'react';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import {HOME_NAVIGATOR} from '../constants/routeNames';
import Sidemenu from './Sidemenu';
import { GlobalContext } from '../context/Provider';

// const NavItems = ({navigation}) => {
//   return <Sidemenu navigation={navigation} />;
// };

const getDrawerContent = (navigation, authDispatch) => {
  return <Sidemenu navigation={navigation} authDispatch={authDispatch} />;
};

const DrawerNavigator = () => {
  const {authDispatch}= useContext(GlobalContext)
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatch)
      }>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
