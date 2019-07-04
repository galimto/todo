import React from 'react';
import { StyleSheet, Text, View , StatusBar , Dimensions, Platform } from 'react-native';
const{height,width} = Dimensions.get("window");
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Text style={styles.title}>galimto's ToDO</Text>
      <View style={styles.card}>
		<TextInput style={styles.input} placeholder={"새 잡"}></TextInput>

      </View>

    </View>
  );
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

  }
});
