import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Forecast extends Component {
    render() { 
        return ( 
            <View>
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
 
