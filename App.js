import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Weather from './component/Weather'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <View>
        <Text>Weather App</Text>
      </View>
     );
  }
}
 
export default App;