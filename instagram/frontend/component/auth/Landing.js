import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    Alert,
    TextInput,
} from "react-native";

const Landing = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button title='Register'
                onPress={() => navigation.navigate("Register")}
            />
            <Button title='Login'
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    )
}

export default Landing