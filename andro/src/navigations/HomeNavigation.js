import { createStackNavigator } from "@react-navigation/stack";
import { CONTACT_DETAILS, CONTACT_LIST, CREACTE_CONTACTS, SETTINGS } from "../constants/routeNames";
import { Text } from "react-native";

import Contacts from "../screens/Contacts";
import ContactsDetails from "../screens/ContactDetails";
import CreateContact from "../screens/CreateContact/CreateContact";
import Settings from "../screens/Settings/Settings";

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} options={{headerLeft:()=><Text>ico</Text>}}/>
      <HomeStack.Screen name={CONTACT_DETAILS} component={ContactsDetails} />
      <HomeStack.Screen name={CREACTE_CONTACTS} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
