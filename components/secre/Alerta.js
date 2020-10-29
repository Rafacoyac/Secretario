import React,{Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    //TextInput,
    Button,
    Alert
  } from 'react-native';

  const user='Fabian Romaro Baez';
  const mensaje='sahfdketkrgdkjasdkajdgaetrkaHKeryUHKASJDHKASHEASKLSS';
export default class Alerta extends Component{
    constructor(props){
      super(props);
      this.state={
         user:'Fabian Romaro Baez',
         mensaje:'sahfdketkrgdkjasdkajdgaetrkaHKeryUHKASJDHKASHEASKLSS',
      }
    }
            
    
    render(){
        //const {navigate} = this.props.navigation;
    return(
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
            <ScrollView  style={styles.scrollView}>
            <View style={{  flex: 1 ,backgroundColor: '#FFFFFF' }}>
            <View style={styles.Header}>
                <Text style={styles.texto}>Detalles de Comentario</Text>
               
            </View>
            <>
                <View>
            <Text>{"\n"}</Text>
            <Text>{this.state.user}</Text>
            <Text>{"\n"}</Text>
            <Text>{this.state.mensaje}</Text>
        </View>
                </>
            </View>
            </ScrollView>
        </SafeAreaView>
        </>
    );
    }
}
//export default Alerta;
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