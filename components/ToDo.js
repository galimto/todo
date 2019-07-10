import React , {useState}   from 'react';
import {  View, Text, TouchableOpacity, StyleSheet,Dimensions,Alert,TextInput } from 'react-native';
const {height, width} = Dimensions.get("window");
export default function ToDo2() {
    let state={
        isEditing:false,
        isCompleted:false
    }
    const [txt, setTxt] = useState("Asdf");
    const [isCompleted, setComplted] = useState(false);
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={_completeTodoToggle}>
                <View style={[styles.circle , isCompleted?styles.completedCircle:styles.uncompletedCircle]} ></View>
            </TouchableOpacity>
            <Text style={styles.text} >Hello Im toDo/compo.</Text>
            <TextInput style={styles.input} 
				placeholder={"새 잡"} 
			
				
				value={String(isCompleted)}></TextInput>
        </View> 
        
    )
    function _completeTodoToggle(){
       
        setComplted(!isCompleted)
       
       //setTxt(String(state.isCompleted))
       
    }
    
}
const styles = StyleSheet.create({
    container:{
        width:width - 50,
        borderBottomColor:"#bbb",
        borderBottomWidth:StyleSheet.hairlineWidth,
        flexDirection:"row" ,
        alignItems:"center"
        

        
    },
    circle:{
        width:30,
        height:30,
        borderRadius:15,
        
        
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

 