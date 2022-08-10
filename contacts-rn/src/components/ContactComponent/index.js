import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import React from 'react';
import AppModal from '../AppModal';
import Message from '../common/message';
import color from '../../assets/themes/color';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';
import {CONTACT_DETAILS, CREACTE_CONTACTS} from '../../constants/routeNames';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ContactComponent = ({visible, data, setVisible, loading, sortBy}) => {
  const {navigate} = useNavigation();

  const ListEmptyComp = () => (
    <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
      <Message info messsage="no contacts to show" />
    </View>
  );

  const renderItem = ({item}) => {
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
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigate(CONTACT_DETAILS, {item})}>
        <View style={styles.item}>
          {contact_picture ? (
            <Image
              style={{width: 45, height: 45, borderRadius: 100}}
              source={{uri: contact_picture}}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: color.grey,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}>
              <Text style={[styles.name, {color: color.white}]}>
                {first_name[0]}
              </Text>
              <Text style={[styles.name, {color: color.white}]}>
                {last_name[0]}
              </Text>
            </View>
          )}
          <View style={{paddingLeft: 18}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{first_name}</Text>
              <Text style={styles.name}> {last_name}</Text>
            </View>
            <Text style={styles.phoneNumber}>{`${country_code
              .slice(0, 2)
              .toUpperCase()} ${phone_number}`}</Text>
          </View>
        </View>
        <MaterialIcons
          name="east"
          size={20}
          style={{fontSize: 20, color: '#000'}}
        />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={{backgroundColor: color.white}}>
        <AppModal
          title="hello this is new title"
          visible={visible}
          setVisible={setVisible}
        />

        {loading ? (
          <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
            <ActivityIndicator
              color={color.primary}
              size={'large'}></ActivityIndicator>
          </View>
        ) : (
          <View style={{paddingVertical: 20}}>
            <FlatList
              renderItem={renderItem}
              data={
                sortBy
                  ? data.sort((a, b) => {
                      if (sortBy === 'Firstname') {
                        if (b.first_name > a.first_name) {
                          return -1;
                        } else {
                          return 1;
                        }
                      }
                      if (sortBy === 'Lastname') {
                        if (b.last_name > a.first_name) {
                          return -1;
                        } else {
                          return 1;
                        }
                      }
                    })
                  : data
              }
              keyExtractor={item => String(item.id)}
              ListEmptyComponent={ListEmptyComp}
              ListFooterComponent={<View style={{height: 50}}></View>}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    height: 1,
                    backgroundColor: color.grey,
                    opacity: 0.8,
                  }}></View>
              )}
            />
          </View>
        )}
      </View>
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigate(CREACTE_CONTACTS)}>
        <MaterialIcons
          name="add"
          size={35}
          style={{color: color.white, paddingBottom: 1}}>
          {/* {' + '} */}
        </MaterialIcons>
      </TouchableOpacity>
    </>
  );
};

export default ContactComponent;
