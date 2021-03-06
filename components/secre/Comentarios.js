//import { View } from 'native-base';
import React,{Component} from 'react';
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

  var integrante = [{
    Persona : "Fabian Romero",
    Correo : "Mejoras en en el proyecto"
},
{
    Persona : "Rafael Coyac",
    Correo : "sdlaksdkldlad"
}];
export default class Comentarios extends Component{
  constructor(props){
    super(props);
    this.state={
        Usuario : '',
        Personas:[
          "Fabian Romero Baez",
          "Fabian Baez",
          "Rafael Coyac",
          "Rafael Perez"],
        Comentario: '',
        entrada: [{usuario:'',comentario:''}]
        //query: '',
    }
} 
    render(){
      const {navigate} = this.props.navigation;
      const {Usuario} = this.state;
      const {Comentario} = this.state;
      const {entrada} = this.state;
    return(
        <>
        <View style={{justifyContent: 'center',alignItems: 'center'}}>
        <Text style={styles.texto1}>Comentarios</Text>
        </View>

<View style={{flex:0.7}}>
        <TextInput 
        style={{backgroundColor: '#FFFFFF'}}
        label="Participante"
        theme={{ colors: { text: 'blue', primary: 'blue' } }}
        placeholder="Fabian Romero"
        onChangeText={text => this.setState({ Usuario: text })}
        />
    </View>
<View style={{flexDirection: "row" ,lignItems: 'center' ,justifyContent: 'center'}}>
    <View style={{flex:0.7}}>
        <TextInput 
        style={{backgroundColor: '#FFFFFF'}}
        label="Comentario"
        theme={{ colors: { text: 'blue', primary: 'blue' } }}
        onChangeText={text => this.setState({ Comentario: text })}
        //placeholder="Fabian Romero"
        />
    </View>
    <View style={{flex:0.2}}>
        <Button title="Agregar" 
         onPress={() => 
          this.setState({
            entrada:[
              {
                usuario:this.state.Usuario,
                comentario:this.state.Comentario
              }
            ]
          })
          //alert(this.state.Usuario)} 
        }
        />
    </View>
</View>
<Text>{"\n"}</Text>
<View>
    <DataTable>
        <DataTable.Header style={{backgroundColor: '#596C7E'}}>
        <DataTable.Title >Integrante</DataTable.Title>
        <DataTable.Title >Comentario</DataTable.Title>
        
        </DataTable.Header>
        {
            entrada.map((inter,key) => (
               
                    <DataTable.Row onPress={() => navigate('Alerta')}>
           
           <DataTable.Cell key={inter.text}>{inter.usuario}</DataTable.Cell>
           <DataTable.Cell key={inter.text}>{inter.comentario}</DataTable.Cell>
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