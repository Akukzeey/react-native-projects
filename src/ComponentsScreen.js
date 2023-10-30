import React from "react";
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const ComponentsScreen = () =>{

    return(
        <View>
            <Text style={styles.textStyle}>Components screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:50,
    }
})

export default ComponentsScreen
