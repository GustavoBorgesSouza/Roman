import React, { Component } from 'react';

import {
    FlatList,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import api from './src/services/api';

class Projetos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaProjetos: []
        };
    };

    //Define a função que faz a chamada pra api e traz os projetos 
    buscarProjetos = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');

            const resposta = await api.get('/projetos', {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            });

            if (resposta.status === 200) {
                const dadosDaApi = resposta.data;
                this.setState({ listaProjetos: dadosDaApi });
            }
        } catch (error) {
            console.warn(error);
        }
    };


componentDidMount(){
    this.buscarProjetos();
}

render() {
    return (
        <View>
            <Text>Projetos</Text>
            <View>
                <FlatList
                    data={this.state.listaProjetos} keyExtractor={item => item.idProjeto}
                    renderItem={this.renderItem} />
            </View>
        </View>


    )
};

renderItem = ({ item }) => (
    <Text style={{ color: 'red' }}>{item.nomeProjeto}</Text>
)
};

const styles = StyleSheet.create({

});

export default Projetos;
