import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";

const AppModal = ({ visible, setVisible, title, modalBody, modalFooter }) => {
  return (
    <Modal visible={visible} transparent>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => setVisible(false)}
      >
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <Text>C-</Text>
              {/* <Text size={27}>C-</Text> */}
              <Text style={styles.title}>{title || "RNTitle"}</Text>
              <View />
            </View>
            <View style={styles.body}>{modalBody}</View>
            {modalFooter ? (
              modalFooter
            ) : (
              <View>
                <View style={styles.footerSeperator} />
                <View style={styles.footerItems} />
                <View style={styles.footer}>
                  <Text style={styles.footerText}>Privacy & Policy</Text>
                  <View style={styles.termsView} />
                  <Text style={styles.footerText}>Terms of Service</Text>
                </View>
              </View>
            )}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AppModal;
