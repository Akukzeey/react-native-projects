import React from "react";
import { View} from 'react-native';
import ImageDetail from "./components/imageDetail";


const ImageScreen = () =>{

    return(
        <View>
            <ImageDetail title='Forest' imageSource={require('../assets/forest.jpg')} score='Image score - 9'/>
            <ImageDetail title='Beach' imageSource={require('../assets/beach.jpg')} score='Image score - 7'/>
            <ImageDetail title='Mountain' imageSource={require('../assets/mountain.jpg')} score='Image score - 4'/>
        </View>
    )
}

export default ImageScreen
