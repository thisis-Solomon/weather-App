import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Forecast from './Forecast';
import Weather_api from './Weather_api'

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            city: '',
            forecast: null,
         }
    }
    _handleInput = event => {
        let city = event.nativeEvent.text;
        Weather_api.fetchForecast(city).then(forecast => {
            console.log(forecast);
            this.setState({forecast: forecast})
        })
        this.setState({city: event.nativeEvent.text})
    }
    render() { 
        let content = null;
        if(this.state.forecast !== null){
            content = (
                <Forecast
                    main = {this.state.forecast.main}
                    description = {this.state.forecast.description}
                    temp = {this.state.forecast.temp}
                />
            )
        }
        return ( 
            <View style = {styles.container}>
                <Text>
                    City: {this.state.city}
                </Text>
                {content}
                <TextInput
                    style = {styles.input}
                    onSubmitEditing = {this._handleInput}
                />
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5fcff'
    },
    input:{
        fontSize: 20,
        borderWidth: 2,
        height: 40,
        padding: 2,
        width: 100,
        textAlign: 'center'

    }
})