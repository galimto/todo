import React ,{Component} from "react";
import {  View, Text, TouchableOpacity, StyleSheet ,Dimensions,TextInput } from 'react-native';
const {height, width} = Dimensions.get("window");
export default class Todo extends Component{
    state={
        isEditing:false,
        isCompleted:false
    }
    render(){
        const {isCompleted}= this.state;
        return(
            <View style={styles.container}>
                <TouchableOpacity  onPress={this._completeTodoToggle}>
                    <View style={[styles.circle , isCompleted?styles.completedCircle:styles.uncompletedCircle]}  ></View>
                </TouchableOpacity>
                <Text style={styles.text}>Hello Im toDo.</Text>
                <TextInput style={styles.input} 
				placeholder={"새 잡"} 
			
				
				value={String(isCompleted)}></TextInput>
            </View>

        )
        

    }
    _completeTodoToggle = () => {
        this.setState(prevState =>{
            return{
                isCompleted:!prevState.isCompleted
            }
        })
     }
}
const styles = StyleSheet.create({
    container:{
        width:width - 50,
        borderBottomColor:"#bbb",
        borderBottomWidth:StyleSheet.hairlineWidth,
        flexDirection:"row", 

        alignItems:"center"
        
    },
    circle:{
        width:30,
        height:30,
        borderRadius:15,
        
        borderColor:"red",
        borderWidth:5,
        marginRight:20

    },
    text:{
        fontWeight:"600",
        fontSize:20,
        marginVertical:20


    },
    completedCircle:{
        borderColor:"blue"
    },
    uncompletedCircle:{
        borderColor:"red"
    }
})