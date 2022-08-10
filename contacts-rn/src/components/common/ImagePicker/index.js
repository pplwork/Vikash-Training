import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import style from './style';
import ImageCropPicker from 'react-native-image-crop-picker';

const ImagePicker = React.forwardRef(({onFileSelected}, ref) => {
  const options = [
    {
      name: 'Take from camera',
      icon: <MaterialIcons name="camera" size={20} />,
      onPress: () => {
        ImageCropPicker.openCamera({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(image => {
            console.log('image', image);
            onFileSelected(image);
          })
          .catch(err => console.log(err));
      },
    },
    {
      name: 'choose form gallery',
      icon: <MaterialIcons name="collections" size={20} />,
      onPress: () => {
        ImageCropPicker.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(image => {
            console.log('image', image);
            onFileSelected(image);
          })
          .catch(err => console.log(err));
      },
    },
  ];
  return (
    <>
      <RBSheet
        ref={ref}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={180}
        openDuration={250}
        customStyles={{
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View style={style.containerWrapper}>
          {options.map(item => (
            <TouchableOpacity
              key={item.name}
              onPress={item.onPress}
              style={style.pickerOptions}>
              {item.icon}
              <Text style={style.text}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </RBSheet>
    </>
  );
});

export default ImagePicker;
