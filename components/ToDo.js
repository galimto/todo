import React , {useState}   from 'react';
import {  View, Text, TouchableOpacity, StyleSheet,Dimensions,Alert,TextInput } from 'react-native';
const {height, width} = Dimensions.get("window");
export default function ToDo2() {
    var state={
        isEditing:false,
        isCompleted:false
    }
    const [txt, setTxt] = useState("Asdf");
    const [isCompleted, setComplted] = useState(false , _cc);
    const [isEditing, setEditing]= useState(true  )
     

    return (
        <View style={styles.container}>
            
                
                    <View style={styles.column}>
                        <TouchableOpacity onPress={_completeTodoToggle}>
                        <View style={[styles.circle , isCompleted?styles.completedCircle:styles.uncompletedCircle]} ></View>
                        </TouchableOpacity>
                        <Text style={[styles.text, isCompleted?styles.completedText:styles.uncompletedText]} >Hello Im toDo/compo.{String(isCompleted)},{String(state.isCompleted)}</Text>
                    </View>
                    <View style={styles.column}>
                        {isEditing?(
                            <View style={styles.actions}>
                                <TouchableOpacity>
                                    <View style={styles.actionContainer}>
                                        <Text style={styles.actionText}>☑</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        

                        ):(
                            <View style={styles.actions}>
                                <TouchableOpacity>
                                    <View style={styles.actionContainer}>
                                        <Text style={styles.actionText}>☑</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>

                    
                 
            
            
        </View> 
        
    )
    function _completeTodoToggle(){
       
        setComplted(!isCompleted);
        state.isCompleted = !state.isCompleted;

       //setTxt(String(state.isCompleted))
       
    }
    function _cc(){
        alert(1)
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
    },
    completedText:{
        textDecorationLine:"line-through",
        fontStyle: 'italic',
        color:"#bbb"
    },
    uncompletedText:{

    }
    
})

 