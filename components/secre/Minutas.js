import React from 'react';
import { Component } from 'react';
import { useNavigation,NavigationContainer } from '@react-navigation/native';
import Participantes from './Participantes';
import Comentarios from './Comentarios';
import Acuerdos from './Acuerdos';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    //TextInput,
    Button
  } from 'react-native';
import { DataTable,TextInput } from 'react-native-paper';

//const navigation = useNavigation();
class Minutas extends Component{
  constructor(props){
    super(props);
  }
//const Minutas = ({navigation}) => {
  render(){
    return(
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
            <ScrollView  style={styles.scrollView}>
            <View style={{  flex: 1 ,backgroundColor: '#FFFFFF' }}>
            <View style={styles.Header}>
                <Text style={styles.texto}>Minutas de reunion</Text>
            </View>
            <>
            <Participantes navigation={this.props.navigation}/>
            </>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <>
            <Comentarios navigation={this.props.navigation}/>
            </>

            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <>
            <Acuerdos navigation={this.props.navigation}/>
            </>
        </View>
            </ScrollView>
        </SafeAreaView>
        </>

    );
}
}

export default Minutas;
const styles = StyleSheet.create({
    container: {
      //flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#596C7E',
      
    },
    texto:{
      fontSize: 20,
      fontWeight: 'bold',
      color :'white'
  },
  texto1:{
    fontSize: 15,
    fontWeight: 'bold',
    color :'white',
    justifyContent: 'center'
},
    Header: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000', 
      height: 50
    },
   
    input: {
        
        margin: 5,
        height: 60,
        width : 350,
        backgroundColor: '#596C7E',
        color: "white",
        //borderColor: '#7a42f4',
        borderWidth: 0
     },
    inputext: {
      width: 200,
      height: 44,
      padding: 10,
      textAlign:'center',
      fontWeight:'bold',
      fontFamily : 'Arial',
        },
    tinyLogo: {
      //padding : -30,
      width: 120,
      height: 120,
    },
    boton:{
      width: 150,
      height: 20,
      justifyContent: 'center'
    }
  });