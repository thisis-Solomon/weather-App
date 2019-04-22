import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class Forecast extends Component {
    render() { 
        return ( 
            <View style = {{alignItems: 'center', fontSize: 14}}>
                <Text>
                    {this.props.country}.
                </Text> 
                <Text>
                    {this.props.main}
                </Text>
                <Text>
                    {this.props.description}
                </Text>
                <Text>
                    {this.props.temp} F
                </Text>
            </View>
         );
    }
}
 
