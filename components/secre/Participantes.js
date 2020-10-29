//import { View } from 'native-base';
import React,{Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    //TextInput,
    Button,
    Alert
  } from 'react-native';
  import { DataTable,TextInput } from 'react-native-paper';
  import { useNavigation,NavigationContainer } from '@react-navigation/native';
  import Autocomplete from 'react-native-autocomplete-input';
  
import { createStackNavigator } from '@react-navigation/stack';
//import Integrantes from './Acuerdos';

var integrante = [{
    Persona : "Fabian Romero",
    Correo : "Ejemplo_correo@gmail.com"
},
{
    Persona : "Rafael Coyac",
    Correo : "Ejemplo_correo@gmail.com"
}];

  
export default class Integrantes extends Component{
//    export default Integrantes = ({navigation}) =>{
    constructor(props){
        super(props);
        this.state={
            Usuario : '',
            Personas:[
              "Fabian Romero Baez",
              "Fabian Baez",
              "Rafael Coyac",
              "Rafael Perez"],
            participantes:[{Persona:'',Correo:''}],
            //query: '',
        }
    } 

    
    /*constructor(props) {
        super(props);
        
        /*this.state = {
            
            integrante : "",
            DataTable : []
        }*/
       /* this.state = {
            HeadTable: ['Integrante', 'Correo']
          /*DataTable: [
            ['1', '2', '3', '4', '5'],
            ['a', 'b', 'c', 'd', 'e'],
            ['1', '2', '3', '4', '5'],
            ['a', 'b', 'c', 'd', 'e'],
            ['1', '2', '3', '4', '5']
          ]*/
      //  }
      //}
      
      
    render(){
      const {navigate} = this.props.navigation;
      const {Usuario} = this.state;
     const{Personas} = this.state;
     const{participantes} = this.state;
     //const navigation = useNavigation();

       
    return(
        <>
        <View style={{justifyContent: 'center',alignItems: 'center'}}>
        <Text style={styles.texto1}>Participantes</Text>
        </View>
            
            <View style={{flexDirection: "row" ,lignItems: 'center' ,justifyContent: 'center'}}>
                <View style={{flex:0.7}}>
                
                    <View >
                    
                    <Autocomplete
                    autoCapitalize="none"
                    autoCorrect={false}
                    containerStyle={styles.autocompleteContainer}
                    data={Personas}
                    defaultValue={Usuario}
                    onChangeText={text => this.setState({ Usuario: text })}
                    renderItem={({ item, i }) => (
                        <TouchableOpacity onPress={() => this.setState({ Usuario: item })}>
                             <Text>{item}</Text>
                        </TouchableOpacity>
                  )}
                   />
                    </View>
                   
                </View>
                <View style={{flex:0.2}}>
                    <Button title="Agregar" 
                    //onClick={this.Add_Columna}
                    onPress={() => 
                      this.setState({
                        participantes:[
                          {
                            Persona:this.state.Usuario,
                            Correo:'Ejemplo_correo@gmail.com'
                          }
                        ]
                      })
                      //alert(this.state.Usuario)} 
                    }/>
                </View>
            </View>
            <Text>{"\n"}</Text>
            <View style={{flex:0.8}}>
           
        <DataTable>
        <DataTable.Header style={{backgroundColor: '#596C7E'}}>
          <DataTable.Title>Integrante</DataTable.Title>
          <DataTable.Title>Correo</DataTable.Title>
          
        </DataTable.Header>
        {
            participantes.map((inter,key) => (
                
                    <DataTable.Row  onPress={() => navigate('Alerta')} >
           <DataTable.Cell >{inter.Persona}</DataTable.Cell>
           <DataTable.Cell >{inter.Correo}</DataTable.Cell>
           
           
        </DataTable.Row>
                
            ))
          }
        </DataTable>
            </View>
        </>
    );
    }
}
const styles = StyleSheet.create({
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  },
    containerr: { 
        //flex: 0.9,
        padding: 18,
        paddingTop: 35,
        backgroundColor: '#ffffff' 
      },
      HeadStyle: { 
        height: 50,
        alignContent: "center",
        backgroundColor: '#596C7E'
      },
      TableText: { 
        margin: 10,
        color:'white'
      },
    container: {
      //flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      
    },
    texto:{
      fontSize: 20,
      fontWeight: 'bold',
      color :'white'
  },
  texto1:{
    fontSize: 18,
    fontWeight: 'bold',
    color :'#000000',
    justifyContent: 'center'
},
    Header: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E6B24B', 
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