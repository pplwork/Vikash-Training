import { Text, View } from 'react-native';
import React,{useState} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {videoData} from './Database';
import SingleReel from './SingleReel';

const ReelsComponent = () => {

  const [currentItem, setCurrentItem] = useState(0);

  const handleChangeIndexValue = ({index})=>{
    setCurrentItem(index);
  }
  
  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={videoData}
      renderItem={({item,idx})=>(
        <SingleReel key={idx} item={item} currentIndex={currentItem} />
      )}
    />
  )
}

export default ReelsComponent