import React from "react";
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const SquareScreen = ({colorTitle,onIncrease,onDecrease}) =>{

    return(
        <View>
            <Text>{colorTitle}</Text>
            <Button onPress={()=>onIncrease()} title={`Increase ${colorTitle}`}/>
            <Button onPress={()=>onDecrease()} title={`Decrease ${colorTitle}`}/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SquareScreen
