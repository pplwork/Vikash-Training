import { TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ContactComponent from "../../components/ContactComponent";
import { GlobalContext } from "../../context/Provider";
import getContacts from "../../context/actions/contacts/getContacts";

const Contacts = () => {
  const { setOptions, toggleDrawer } = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const {
    contactsDispatch,
    contactsState: {
      getContacts: { data, loading },
    },
  } = useContext(GlobalContext);

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

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  return (
    <ContactComponent
      data={data}
      loading={loading}
      visible={modalVisible}
      setVisible={setModalVisible}
    />
  );
};

export default Contacts;
