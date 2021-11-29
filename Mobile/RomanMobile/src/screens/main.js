import React, { Component } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bottomTab = createBottomTabNavigator();

import Cadastro from './Cadastrar';
import Projetos from './projetos';
import Perfil from './perfil';

class Main extends Component {

  render(){
    return (
      <View style={styles.main}>
        <StatusBar 
          hidden={false}
        />

          <bottomTab.Navigator
            initialRouteName='Projetos'
            
            screenOptions={ ({ route }) => ({
              tabBarIcon: () => {
                if (route.name === 'Cadastro') {
                  return(
                    <Text>C</Text>
                  )
                }
                if (route.name === 'Projetos') {
                  return(
                    <Text>Pro</Text>
                  )
                }
                if (route.name === 'Perfil') {
                  return(
                    <Text>P</Text>
                  )
                }
              },

              // React Navigation 6.x
              headerShown: false,
              tabBarShowLabel: true,
              tabBarActiveBackgroundColor: '#68c2e8',
              tabBarInactiveBackgroundColor: '#009df5',
              // tabBarActiveTintColor: 'blue',
              // tabBarInactiveTintColor: 'red',
              tabBarStyle: { height: 50 }              
            }) }
          >
            <bottomTab.Screen name="Cadastro" component={Cadastro} />
            <bottomTab.Screen name="Projetos" component={Projetos} />
            <bottomTab.Screen name="Perfil" component={Perfil} />
          </bottomTab.Navigator>        

      </View>
    );
  }
  
};

const styles = StyleSheet.create({

  // conteúdo da main
  main: {
    flex: 1,
    backgroundColor: '#F1F1F1'
  },

  // estilo dos ícones da tabBar
  tabBarIcon: {
    width: 22,
    height: 22
  }

});

export default Main;