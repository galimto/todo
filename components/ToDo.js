import React , {useState}   from 'react';
import {  View, Text, TouchableOpacity, StyleSheet,Dimensions,Alert,TextInput } from 'react-native';
const { width,height} = Dimensions.get("window");
export default function ToDo2(props) {
    

    const [todoValue, setTodoValue] = useState("");
    const [isCompleted, setComplted] = useState(false );
    const [isEditing, setEditing]= useState(false  )
    const [text, setText] = useState(props.text);
    const [text2, setText2] = useState(props.text2);
     

    return (
        <View style={styles.container}>
            
                
                    <View style={styles.column}>
                        <TouchableOpacity onPress={_completeTodoToggle}>
                            <View style={[styles.circle , isCompleted?styles.completedCircle:styles.uncompletedCircle]} >
                            </View>
                        </TouchableOpacity>
                        
                        {isEditing?(
                        <TextInput style={[styles.input, styles.text]} value={todoValue} multiline={true}></TextInput>
                        ):(
                        <Text style={[styles.text, isCompleted?styles.completedText:styles.uncompletedText]} >{text}  </Text>
                        )}
                    </View>
                     
                        {isEditing?(
                            <View style={styles.actions}>
                                <TouchableOpacity  onPressOut={_endEditing}>
                                    <View style={styles.actionContainer}>
                                        <Text style={styles.actionText}>☑</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        

                        ):(
                            <View style={styles.actions}>
                                <TouchableOpacity onPressOut={_startEditing}>
                                    <View style={styles.actionContainer}>
                                        <Text style={styles.actionText}>✎</Text>
                                    </View>
                                </TouchableOpacity>
                           
                             <TouchableOpacity>
                                 <View style={styles.actionContainer}>
                                     <Text style={styles.actionText}>×</Text>
                                 </View>
                             </TouchableOpacity>
                         </View>
                        )}
                     

        </View> 
        
    )
    function _completeTodoToggle(){
       
        setComplted(!isCompleted);
        state.isCompleted = !state.isCompleted;

       //setTxt(String(state.isCompleted))
       
    }
    function _startEditing(){
        setEditing(true);
        setTodoValue(props.text)
        
    }
    function _endEditing(){
        setEditing(false);
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
        alignItems:"center",
        justifyContent:"space-between"
        

        
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

    },
    column:{
        flexDirection:"row",
        alignItems:"center",
     //   width:width/2,
        justifyContent:"space-between"
    },
    actions:{
        flexDirection:"row"
    },
    actionContainer:{
        marginHorizontal:10,
        marginVertical:10

    },
    actionText:{
        fontSize:30
    },input:{
        marginVertical:15



    }
    
    
    
})

 