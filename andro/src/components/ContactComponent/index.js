import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import React from "react";
import AppModal from "../common/AppModal";
import Message from "../common/message";
// import Icon from "../../components/common/container/Icons"
import color from "../../assets/themes/color";
import styles from "./styles.js";
import { useNavigation } from "@react-navigation/native";
import { CREACTE_CONTACTS } from "../../constants/routeNames";

const ContactComponent = ({ visible, data, setVisible, loading }) => {
  console.log("contactsState", data, loading);
  const { navigate } = useNavigation();

  const ListEmptyComp = () => (
    <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
      <Message info messsage="no contacts to show" />
    </View>
  );
  const renderItem = ({ item }) => {
    const {
      id,
      contact_picture,
      country_code,
      first_name,
      is_favorite,
      last_name,
      phone_number,
    } = item;

    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          {!contact_picture ? (
            <Image
              style={{ width: 45, height: 45, borderRadius: 100 }}
              source={{ uri: contact_picture }}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: color.grey,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
              }}
            >
              <Text style={[styles.name, { color: color.white }]}>
                {first_name[0]}
              </Text>
              <Text style={[styles.name, { color: color.white }]}>
                {last_name[0]}
              </Text>
            </View>
          )}
          <View style={{ paddingLeft: 18 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.name}>{first_name}</Text>
              <Text style={styles.name}> {last_name}</Text>
            </View>
            <Text style={styles.phoneNumber}>{`${country_code
              .slice(0, 2)
              .toUpperCase()} ${phone_number}`}</Text>
          </View>
        </View>
        <Text style={{ fontSize: 20, color: color.grey }}>{">"}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={{ backgroundColor: color.white }}>
        <AppModal
          title="hello this is new title"
          visible={visible}
          setVisible={setVisible}
        />

        {/* <CustomButton onPress={() => setVisible(true)} /> */}

        {loading ? (
          <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
            <ActivityIndicator
              color={color.primary}
              size={"large"}
            ></ActivityIndicator>
          </View>
        ) : (
          <View style={{ paddingVertical: 20 }}>
            <FlatList
              renderItem={renderItem}
              data={data}
              keyExtractor={(item) => String(item.id)}
              ListEmptyComponent={ListEmptyComp}
              ListFooterComponent={<View style={{ height: 50 }}></View>}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    height: 1,
                    backgroundColor: color.grey,
                    opacity: 0.8,
                  }}
                ></View>
              )}
            />
          </View>
        )}
      </View>
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigate(CREACTE_CONTACTS)}
      >
        <Text style={{ fontSize: 35, color: color.white, paddingBottom: 5 }}>
          {" + "}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default ContactComponent;
