import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class Forecast extends Component {
    render() { 
        return ( 
            <View style = {{alignItems: 'center', fontSize: 14, padding: 10}}>
                <Text   style = {{alignItems: 'center', fontSize: 25}}>
                    {this.props.country}.
                </Text> 
                <Text   style = {{alignItems: 'center', fontSize: 20, fontStyle: 'italic'}}>
                    Your Weather
                </Text>
                <Text   style = {{alignItems: 'center', fontSize: 30}}>
                    {this.props.description}
                </Text>
                <Text   style = {{alignItems: 'center', fontSize: 26, paddingBottom: 15}}>
                    {(this.props.temp)} 'F
                </Text>
            </View>
         );
    }
}
 
