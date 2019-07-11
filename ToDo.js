import React ,{Component} from "react";
import {  View, Text, TouchableOpacity, StyleSheet ,Dimensions,TextInput } from 'react-native';
const {height, width} = Dimensions.get("window");
export default class Todo extends Component{
    state={
        isEditing:false,
        isCompleted:false,
        todoValue:""
    }
    render(){
        const {isCompleted, isEditing}= this.state;
        const {text} = this.props;
        return(
            <View style={styles.container}>
            
            
                <View style={styles.column}>
                    <TouchableOpacity onPress={this._completeTodoToggle}>
                        <View style={[styles.circle , isCompleted?styles.completedCircle:styles.uncompletedCircle]} >
                        </View>
                    </TouchableOpacity>
                    <Text style={[styles.text, isCompleted?styles.completedText:styles.uncompletedText]} >{text}</Text>
                </View>
                <View style={styles.column}>
                    {isEditing?(
                        <View style={styles.actions}>
                            <TouchableOpacity  onPressOut={this._endEditing}>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>☑</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    

                    ):(
                        <View style={styles.actions}>
                            <TouchableOpacity onPressOut={this._startEditing}>
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
     _startEditing =()=>{
        const {text} = this.props;
        this.setState({
            isEditing:true,
            todoValue:text
        })
     }
     _endEditing =() =>{
        this.setState({
            isEditing:false
        })

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
        width:width/2,
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
    }
    
    
    
})