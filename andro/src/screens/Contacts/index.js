import { TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ContactComponent from "../../components/ContactComponent";
import GlobalContext from "../../context/Provider";

const Contacts = () => {
  const { setOptions, toggleDrawer } = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  // const { contactsState:{data, loading} } = useContext(GlobalContext);
  // console.log("contactsState", contactsState);
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <MaterialIcons style={{ paddingLeft: 10, fontSize: 23 }}>
            menu
          </MaterialIcons>
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <ContactComponent visible={modalVisible} setVisible={setModalVisible} />
  );
};

export default Contacts;
