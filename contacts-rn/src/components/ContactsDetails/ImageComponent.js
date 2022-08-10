import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const ImageComponent = ({src}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onLoadStart = () => {
    setIsLoading(true);
  };
  const onLoadEnd = () => {
    setIsLoading(false);
  };
  const onError = () => {
    setIsLoading(false);
    setIsError(true);
  };

  return (
    <View style={styles.imageContainer}>
      {isLoading && <Text style={styles.loading}>Loading..</Text>}
      <Image
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        onError={onError}
        source={{uri: src}}
        style={styles.detailPhoto}
      />
    </View>
  );
};

export default ImageComponent;
