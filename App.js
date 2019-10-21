import React,{ Component } from "react";
import { NativeRouter as Router, Switch, Route } from 'react-router-native';
import { StyleSheet, View } from 'react-native';

import ListaSignos from "./ListaSignos.js";
import DetalhesSigno from "./DetalhesSigno.js";

export default class App extends Component{
    render(){
        return (
            <Router>
                <View style={styles.container}>
                    <Switch>
                        <Route path='/:idSigno' component={DetalhesSigno} />
                        <Route component={ListaSignos} />
                    </Switch>
                </View>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});