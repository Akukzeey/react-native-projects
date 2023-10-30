import React,{useState} from 'react'
import {View, Button, StyleSheet, FlatList} from "react-native";


const ColourScreen = () =>{
    const [colors,setColors] = useState([])

    console.log(colors)

    return <View>
        <Button
            title='Add a colour'
            onPress={()=>{
                setColors([...colors,randomRgb()])
            }}
        />
        <FlatList
            keyExtractor={(item) => item}
            data={colors}
            renderItem={({item})=>{
                return  <View style={{width:200,height:300,backgroundColor:item }}></View>
            }}
            />
    </View>
}

const randomRgb = () =>{
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)

    return `rgb(${red},${green},${blue})`
}

export default ColourScreen
