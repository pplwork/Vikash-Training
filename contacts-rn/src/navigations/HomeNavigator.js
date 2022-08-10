import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  CONTACT_DETAILS,
  CONTACT_LIST,
  CREACTE_CONTACTS,
  SETTINGS,
  LOGOUT
} from '../constants/routeNames';
import {Text} from 'react-native';
import Contacts from '../screens/Contacts';
import Contactdetails from '../screens/ContactDetails';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';
import LogOut from '../screens/Logout';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator
      initialRouteName={CONTACT_LIST}
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      {/* <HomeStack.Screen name={CONTACT_LIST} component={Contacts} options={{headerLeft:()=><Text style={{padding:10}}> X </Text>}} /> */}
      <HomeStack.Screen name={CONTACT_DETAILS} component={Contactdetails} />
      <HomeStack.Screen name={CREACTE_CONTACTS} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
      <HomeStack.Screen name={LOGOUT} component={LogOut} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
