import { CurrentRenderContext } from '@react-navigation/core';
import React, { Component } from 'react';

import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

import api from '../services/api';

class Projetos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaProjetos: []
        };
    };

    // Define a função que faz a chamada pra api e traz os projetos 
    buscarProjetos = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');

            const resposta = await api.get('/projetos', {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            });

            if (resposta.status === 200) {
                console.warn('chegou')
                const dadosDaApi = resposta.data;
                this.setState({ listaProjetos: dadosDaApi });
                console.warn(listaProjetos)
            }
        } catch (error) {
            console.warn(error);
        }
    };


    componentDidMount() {
        this.buscarProjetos();
    }

    render() {
        return (
            <View style={styles.bodyProjeto}>
                <View>
                    <Image
                        source={require('../assets/coruja.png')}
                        style={styles.corujaLogo}
                    />
                </View>

                <View style={styles.container_titulo}>
                    <Text style={styles.txtTitulo}>Projetos</Text>
                </View>

                <View>
                    <View style={styles.mainBody}>
                        <FlatList
                            contentContainerStyle={styles.cardProjeto}
                            data={this.state.listaProjetos} keyExtractor={item => item.IdProjeto}
                            renderItem={this.renderItem} />
                    </View>
                </View>
            </View>
        )
    };

    renderItem = ({ item }) => (
        <Text style={{ color: 'red' }}>{item.nomeProjeto}</Text>

    )
};

const styles = StyleSheet.create({


    corujaLogo: {
        width: 200,
        height: 200,
    },

    bodyProjeto: {
        height: '100%',
        backgroundColor: 'rgba(255, 222, 50, 0.34);',
        justifyContent: 'center'
    },

    mainBody: {
        flex: 4
    },

    cardProjeto: {
        width: 337,
        height: 115
    },

    container_titulo: {
        width: 165,
        alignItems: 'center',
        borderBottomColor: '#009DF5',
        borderBottomWidth: 1,
    },

    txtTitulo: {
        fontSize: 37,
        color: '#009DF5'
    },

    mainBodyContent: {
        paddingTop: 30,
        paddingRight: 50,
        paddingLeft: 50,
    },
});

export default Projetos;
