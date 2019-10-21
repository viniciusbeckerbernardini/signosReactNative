import React, {Component} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import signos from './signos.json';

export default class DetalhesSigno extends Component{

    constructor(){
        super();
        this.state = {
            signo:undefined
        }
    }

    componentDidMount(){
        const idSignoInt = parseInt(this.props.match.params.idSigno,10);

        this.setState({
            signo: signos
                .filter((signo,key) => idSignoInt === key)
                .shift()
        });
    }

    render (){ 
        
        const { signo } = this.state

        if(!signo){
            return(
                <View style={styles.container}>
                <Text>Não achei, ta de saca né? </Text>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{signo.nome}</Text>
                <Text style={styles.text}>{signo.caracteristica}</Text>
                <Text style={styles.text, styles.date}>{signo.periodo.join(' até ')}</Text>
                <View style={styles.button}>
                    <Button title="Voltar" onPress={() => this.props.history.push("/") } />
                </View>
            </View> 
        )        
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        padding:15,
        margin:5
    },
    title: {
        fontSize:32,
        marginBottom:15
    },
    text:{
        fontSize:18,
        marginBottom:10
    },
    date:{
        fontSize:28,
        borderBottomWidth:1,
        borderBottomColor:'#111'
    },
    button:{
        marginTop:50
    }
});


