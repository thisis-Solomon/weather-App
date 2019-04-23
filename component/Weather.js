import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, StatusBar, Image} from 'react-native';
import Forecast from './Forecast';
import Weather_api from './Weather_api'


export default class Weather extends Component {
    static navigationOptions = {
        title: `Today\'s Weather Forecast`,
        headerStyle: {
          backgroundColor: '#AAAAAA',
        },
        headerTitleStyle: { 
          textAlign:"center", 
          flex:1,
          fontSize: 25,
        },
      };
    constructor(props) {
        super(props);
        this.state = { 
            city: '',
            forecast: null,
            time: new Date().toLocaleString()
         }
    }
    componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      tick() {
        this.setState({
          time: new Date().toLocaleString()
        });
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
                    country = {this.state.forecast.country}
                    icon = {this.state.forecast.icon}
                    description = {this.state.forecast.description}
                    temp = {this.state.forecast.temp}
                />
            )
        }
        return ( 
            <View style = {{padding: 25, alignItems: 'center'}}>
            <StatusBar hidden/>
              <View> 
                <Text style = {{fontSize: 25, fontStyle: 'italic', padding: 10,  alignContent: 'center'}}>
                    {this.state.time}
                </Text>
              </View>

              <View >
                <Text style = {{fontSize: 28, alignContent: 'center'}}>
                  {this.state.city}
                </Text>
                  {content}

              </View>

                <TextInput
                    placeholder = "Your City ?"
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
        borderRadius: 20,
        height: 40,
        padding: 2,
        width: 130,
        textAlign: 'center',
    }
})