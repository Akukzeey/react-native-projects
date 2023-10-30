import React from "react";
import { StyleSheet, Text, View,Image} from 'react-native';


const ImageDetail = (props) =>{
k
    return(
        <View>
            <Image style={styles.imageStyle} source={props.imageSource}/>
            <Text>{props.title}</Text>
            <Text>{props.score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
     imageStyle:{
         height:200,
         width:200
     }
})

export default ImageDetail
