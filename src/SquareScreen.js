// import React,{useState} from "react";
// import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import ColorCounter from "./components/ColorCounter";
//
//
// const SquareScreen = () =>{
//     const [red,setRed] = useState(0)
//     const [green,setGreen] = useState(0)
//     const [blue,setBlue] = useState(0)
//
//     const colorIncrement = 15
//
//     const setColor = (color, change) => {
//         switch (color) {
//             case 'red':
//                 setRed((prevRed) => (prevRed + change > 255 || prevRed + change < 0 ? prevRed : prevRed + change));
//                 return;
//             case 'green':
//                 setGreen((prevGreen) => (prevGreen + change > 255 || prevGreen + change < 0 ? prevGreen : prevGreen + change));
//                 return;
//             case 'blue':
//                 setBlue((prevBlue) => (prevBlue + change > 255 || prevBlue + change < 0 ? prevBlue : prevBlue + change));
//                 return;
//             default:
//                 return;o
//         }
//     }
//
//     return(
//         <View>
//            <ColorCounter
//                onIncrease={() => setColor('red', colorIncrement)}
//                onDecrease={()=>setColor('red', -1 * colorIncrement)}
//                colorTitle='red' />
//            <ColorCounter
//                colorTitle='green'
//                onIncrease={()=>setColor('green', colorIncrement)}
//                onDecrease={()=>setColor('green', -1 * colorIncrement)}/>
//            <ColorCounter
//                colorTitle='blue'
//                onIncrease={()=>setColor('blue', colorIncrement)}
//                onDecrease={()=>setColor('blue', -1 * colorIncrement)}/>
//                <View style={{backgroundColor:`rgb(${red},${green},${blue})`,height:200,width:200}}/>
//             </View>
//     )
// }
//
// const styles = StyleSheet.create({
// })
//
// export default SquareScreen



/// the same process but using reducer


import React,{useReducer} from "react";
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ColorCounter from "./components/ColorCounter";

const reducer = (state,action) =>{
    switch (action.colorToChange){
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0 ? state : {...state,red:state.red + action.amount}
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0 ? state : {...state,green:state.green + action.amount}
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state : {...state,blue:state.blue + action.amount}
        default:
            return;
    }
}

const SquareScreen = () =>{
    const colorIncrement = 15
    const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0})
    const {red,green,blue} = state;

    return(
        <View>
            <ColorCounter
                onIncrease={() =>dispatch({colorToChange:'red',amount:colorIncrement}) }
                onDecrease={()=>dispatch({colorToChange:'red',amount:-1 * colorIncrement}) }
                colorTitle='red' />
            <ColorCounter
                colorTitle='green'
                onIncrease={()=>dispatch({colorToChange:'green',amount:colorIncrement})}
                onDecrease={()=> dispatch({colorToChange:'green',amount:-1 * colorIncrement})}/>
            <ColorCounter
                colorTitle='blue'
                onIncrease={()=>dispatch({colorToChange:'blue',amount:colorIncrement})}
                onDecrease={()=>dispatch({colorToChange:'blue',amount:-1 * colorIncrement})}/>
            <View style={{backgroundColor:`rgb(${red},${green},${blue})`,height:200,width:200}}/>
        </View>
    )
}

const styles = StyleSheet.create({
})

export default SquareScreen
