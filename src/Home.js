import React from "react";
import {Button, StyleSheet, Text, View} from 'react-native';


const HomeScreen = ({navigation}) =>{


    return(
        <View>
        <Text style={styles.textStyle}>Home screen</Text>
            <Button
                title='Go to Components Demo'
                onPress={()=>navigation.navigate('Components')}
            />
            <Button
                onPress={()=>navigation.navigate('List')}
                    title='Go to list'
            />
            <Button
                onPress={()=>navigation.navigate('Image')}
                title='Go to Image Screen'
            />
            <Button
                onPress={()=>navigation.navigate('Counter')}
                title='Go to Counter Screen'
            />
            <Button
                onPress={()=>navigation.navigate('Color')}
                title='Go to color screen'
            />
            <Button
                onPress={()=>navigation.navigate('Square')}
                title='Go to square screen'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:50,
    }
})

export default HomeScreen
