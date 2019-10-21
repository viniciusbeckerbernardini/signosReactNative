import React,{Component} from "react";

import { StyleSheet, View, Button } from 'react-native';
import signos from './signos.json';

export default class ListaSignos extends Component{

    render(){
        return (
            <View style={styles.container}>
               { signos.map((signo, key) => (
                   <View style={styles.buttons} key={"list-"+key}>
                        <Button style={styles.signButtons} 
                                key={key} 
                                title={signo.nome} 
                                onPress={() => this.props.history.push("/"+key) } />
                    </View>
               ))} 
            </View>       
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    buttons:{
        margin:5
    }
});

