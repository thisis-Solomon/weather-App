/**
 * @format
 */

import 'react-native';
import React from 'react';
import Weather from './component/Weather'
import Forecast from './component/Forecast'
import Weather_api from './component/Weather_api'
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Forecast from '../component/Forecast';
import Weather_api from '../component/Weather_api';

it('renders correctly', () => {
  renderer.create(<App />);
  renderer.create(<Weather/>)
  renderer.create(<Forecast />);
  renderer.create(<Weather_api/>)
});
