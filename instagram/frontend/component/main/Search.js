import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from "react-native";
import firebase from 'firebase';
require('firebase/firestore')

const Search = (props) => {

    const [users, setUsers] = useState([])

    const fetchUsers = (search) => {
        firebase.firestore()
            .collection("users")
            .where('name', '>=', search)
            .get()
            .then((snapshot) => {
                const users = snapshot.docs.map(doc => {
                    const data = doc.data()
                    const id = doc.id;
                    return { id, ...data }
                })
                setUsers(users)
            })
    }
    return (
        <View style={style.container}>
            <View>
                <TextInput placeholder='Search' onChangeText={(search) => fetchUsers(search)} />
            </View>
            <FlatList
            numColumns={1}
            horizontal={false}
            data={users}
            renderItem={({item})=>(
                <TouchableOpacity
                    onPress={()=>props.navigation.navigate("Profile",{uid:item.id})}
                >
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
    },
    userInfo: {
        flex: 1,
        margin: 20
    },
    containerGallery: {
        flex: 1,
    },
    containerImage: {
        flex: 1 / 3,
    },
    image: {
        flex: 1,
        aspectRatio: 1 / 1
    },
})

export default Search