import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TextInput,
  ImageBase,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'professor@gmail.com',
      senha: '987654321',
    };
  }
  //como vamos trabalhar com assync storage,
  //nossa funcao tem que ser async.
  realizarLogin = async () => {
    //nao temos mais  console log.
    //vamos utilizar console.warn.

    //apenas para teste.
    console.warn(this.state.email + ' ' + this.state.senha);

    const resposta = await api.post('/login', {
      email: this.state.email,
      senha: this.state.senha,
    });

    //mostrar no swagger para montar.
    const token = resposta.data.token;
    await AsyncStorage.setItem('userToken', token);

    //agora sim podemos descomentar.
    if (resposta.status == 200) {
      this.props.navigation.navigate('Main');
      console.warn("LOGOUUU!!!");
    }

    console.warn(token);


  };

  render() {
    return (
    
      


      <View style={styles.CorpoLogin}>

        <Image
          source={require('../assets/coruja.png')}
          style={styles.ImgLogin}
        />
        

        <View style={styles.CorpoTitulo}>
        <Text style={styles.TituloLogin}> Login </Text>

        </View>
        

        <TextInput
          style={StyleSheet.inputLogin}
          placeholder="email"
          placeholderTextColor="#FFF"
          keyboardType="email-address"
          // ENVENTO PARA FAZERMOS ALGO ENQUANTO O TEXTO MUDA
          onChangeText={email => this.setState({ email })}
        />

        <TextInput
          placeholder="password"
          placeholderTextColor="#FFF"
          keyboardType="default" //para default nao obrigatorio.
          secureTextEntry={true} //proteje a senha.
          // ENVENTO PARA FAZERMOS ALGO ENQUANTO O TEXTO MUDA
          onChangeText={senha => this.setState({ senha })}
        />

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={this.realizarLogin}>
          <Text>Login</Text>
        </TouchableOpacity>

      </View>



    );
  }
}

const styles = StyleSheet.create({

  TituloLogin:{
  color: '#009DF5',
  fontSize: 37,
  borderBottomColor: '#009DF5',
  borderBottomWidth: 1,
  width:165,

  },
  CorpoTitulo:{
    display: 'flex',
    alignItems: 'center',

  },

  inputLogin: {
    width: 500,
    height: 54,
  },

  ImgLogin: {
    height: 200,
    width: 200,
    left: 106,
    top: -27,
  },
    
    btnLogin: {
    
    
    },
    CorpoLogin:{
     flex : 1,
     height: '100%',
     backgroundColor: ' rgba(255, 222, 50, 0.34)', 
    }

  },
);