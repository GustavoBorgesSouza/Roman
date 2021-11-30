import React, { Component } from 'react';

import {
    FlatList,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TextInput,
    Button
} from 'react-native';

import api from '../services/api';

const InputMultiple = (props) => {
    return (
        <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            maxLength={40}
        />
    );
}

class Cadastro extends Component {

    render() {
        return (
            <View style={styles.pagina}>
                <Image
                    source={require('../assets/coruja.png')}
                    style={styles.corujaLogo}
                />
                <View style={styles.pagTitulo}>
                    <Text style={styles.titulo}>Cadastro</Text>
                </View>
                <View style={styles.main}>

                    <TextInput
                        style={styles.input}
                        onChangeText={styles.input}
                        // value={}
                        placeholder="Digite o titulo do projeto"
                        keyboardType="default"
                    />
                    <InputMultiple
                        multiline
                        numberOfLines={4}
                        // onChangeText={text => onChangeText(text)}
                        // value={value}
                        style={styles.inputMultiple}
                        placeholder="Digite a descrição do projeto"
                    />
                    <Button 
                    title="Cadastro"
                    style={styles.botao}
                    />
                </View>
            </View>


        )
    };

};

const styles = StyleSheet.create({
    pagina: {
        flex: 1,
        backgroundColor: 'rgba(255, 222, 50, 0.34)',
        alignItems: 'center'
    },

    // estilo dos ícones da tabBar
    corujaLogo: {
        flex:1,
        width: 200,
        height: 200,
    },

    pagTitulo: {
        borderBottomColor: "#009DF5",
        borderBottomWidth: 1,
    },

    titulo: {
        textTransform: 'uppercase',
        color: '#009DF5',
        fontWeight: '400',
        fontFamily: "Bebas Neue",
        fontSize: 28
    },

    main:{
        flex:2,
        marginTop: 40,
        width:'70%'
    },

    input:{
        width:'100%',
        borderRadius:20,
        borderColor:"#009DF5",
        placeholderTextColor: '#A4A4A4',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#FFF',
        marginTop:10,
        marginBottom:10
    },

    inputMultiple:{
        width:'100%',
        borderRadius:20,
        borderColor:"#009DF5",
        placeholderTextColor: '#A4A4A4',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#FFF',
        marginTop:10,
        marginBottom:10
    },
    botao:{
      color: '#009DF5',
      borderColor: '#FFF',
      backgroundColor: '#FFF',
      borderRadius: 20
    }
});

export default Cadastro;
