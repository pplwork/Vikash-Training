import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import AppModal from "../common/AppModal";
import CustomButton from "../common/CustomButton";
import Message from "../common/message";

const ContactComponent = ({ visible, data, setVisible }) => {
  const ListEmptyComp = () => (
    <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
      <Message info messsage="no contacts to show" />
    </View>
  );
  const renderItem = ({ item }) => {
    console.log("item", item);
    return (
      <TouchableOpacity>
        <Text>Contact 1</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <AppModal
        title="hello this is new title"
        visible={visible}
        setVisible={setVisible}
      />

      {/* <CustomButton onPress={() => setVisible(true)} /> */}

      <FlatList
        renderItem={renderItem}
        data={[{}]}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={ListEmptyComp}
      />
    </View>
  );
};

export default ContactComponent;
