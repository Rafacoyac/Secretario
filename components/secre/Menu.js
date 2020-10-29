import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Minutas from './Minutas';
import Alerta from './Alerta';
//import Inicio from './Inicio'




const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
       
        
        <Drawer.Screen name="Minutas" component={Minutas} />
        <Drawer.Screen name="Elerta" component={Alerta} />
        
       
          
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
