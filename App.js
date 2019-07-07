import React , {useState} from 'react';
import { StyleSheet, Text, View , StatusBar , Dimensions, Platform } from 'react-native';
const{height,width} = Dimensions.get("window");
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import ToDo from './ToDo';
import ToDo2 from './components/ToDo';
export default function App() {
 
	const [txt, setTxt] = useState("Asdf");
	return (
		
		<View style={styles.container}>
			<StatusBar barStyle="light-content"></StatusBar>
			<Text style={styles.title}>galimto's ToDO</Text>
			<View style={styles.card}>
			<TextInput style={styles.input} 
				placeholder={"새 잡."} 
				placeholderTextColor={"#999"}
				
				value={txt} 
				onChangeText={_controlNewToDo2}
				returnKeyType={"done"}
				autoCorrect={false}
			  ></TextInput>
				<ScrollView contentContainerStyle={styles.todos}>
					<ToDo/>
				</ScrollView>
				<ScrollView contentContainerStyle={styles.todos}>
					<ToDo2/>
				</ScrollView>
			</View>
		

		</View>
	);
	function _controlNewToDo2(text){
		setTxt(text);

	}

 
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center'
    
  },
  title:{
    color:"white",
    fontSize:30,
    marginTop:50,
	fontWeight:"200",
	marginBottom:30

  },
  card:{
	  flex:1,
	  backgroundColor:"white",
	  width:width-25,
	  borderTopLeftRadius:10,
	  borderTopRightRadius:10,
	  ...Platform.select(
		  {
			  ios:{
				shadowColor:"rgb(50,50,50)", 
				shadowOpacity:0.5,
				shadowRadius:5,
				shadowOffset:{
					height:-1,
					width:0
				}

			  },
			  android:{
				elevatiton:3

			  }
		  }
	  )
	  
  },
  input:{
	  padding:20,
	  borderBottomColor:"#bbb",
	  borderBottomWidth:1,
	  fontSize:25


  },
  todos:{
	  alignItems:"center"
  }
});
