import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Container from '../common/container';
import color from '../../assets/themes/color';
import AppModal from '../AppModal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SettingsComp = ({settingOptions, setVisible, visible, preferenceArr}) => {
  return (
    <>
      <AppModal
        closeOnlyOntouchOutside={false}
        visible={visible}
        modalFooter={<></>}
        modalBody={
          <View>
            {preferenceArr.map(({name, selected, onPress}, i) => {
              return (
                <View key={i}>
                  <TouchableOpacity
                    style={{flexDirection: 'row', alignItems: 'center', paddingVertical:5}}
                    onPress={onPress}>
                    <Text style={{fontSize: 17}}>{name}</Text>
                    {selected && (
                      <MaterialIcons style={{paddingLeft: 15}} name="logout" />
                    )}
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        }
        title="sort by"
        setVisible={setVisible}
      />
      <ScrollView style={{backgroundColor: color.white}}>
        {settingOptions.map(({title, subtitle, onPress}, i) => {
          return (
            <TouchableOpacity key={i} onPress={onPress}>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingBottom: 20,
                  paddingTop: 20,
                }}>
                <Text style={{fontSize: 17}}>{title}</Text>
                {subtitle && (
                  <Text style={{fontSize: 14, opacity: 0.6, paddingTop: 10}}>
                    {subtitle}
                  </Text>
                )}
              </View>
              <View style={{height: 0.5, backgroundColor: color.grey}}></View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
};

export default SettingsComp;
