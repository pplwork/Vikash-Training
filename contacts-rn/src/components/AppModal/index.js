import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import proptypes from 'prop-types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AppModal = ({
  visible,
  setVisible,
  title,
  modalBody,
  modalFooter,
  closeOnlyOntouchOutside,
}) => {
  return (
    <Modal visible={visible} transparent>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => {
          if (closeOnlyOntouchOutside) {
            setVisible(false);
          }
        }}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                }}>
                <MaterialIcons name="logout" size={20} />
              </TouchableOpacity>
              <Text style={styles.title}>{title || 'RNTitle'}</Text>
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

AppModal.proptypes = {
  closeOnlyOntouchOutside: proptypes.bool,
};
AppModal.defaultProp = {
  closeOnlyOntouchOutside: true,
};

export default AppModal;
