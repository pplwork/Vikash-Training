import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import color from '../constants/color';

const Header = (props) => {
    return (
        <View style={styles.heading}>
            <Text style={styles.headerTitle} >HI! {props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        backgroundColor:color.primary,
        height:'10%'
    },
    headerTitle:{
        color:'black',
        fontSize:18
    }
});


export default Header