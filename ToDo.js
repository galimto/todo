import React ,{Component} from "react";
import {  View, Text, TouchableOpacity, StyleSheet ,Dimensions } from 'react-native';
const {height, width} = Dimensions.get("window");
export default class Todo extends Component{
    state={
        isEditing:false
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Hello Im toDo.</Text>
            </View>

        )
        

    }
}
const styles = StyleSheet.create({
    container:{
        width:width - 50,
        borderBottomColor:"#bbb",
        borderBottomWidth:StyleSheet.hairlineWidth

        
    }

})