import { createStackNavigator, createAppContainer } from "react-navigation";
import Weather from './component/Weather';


const AppNavigator = createStackNavigator({

        Home: Weather,
      },
      {
        initialRouteName: "Home"
      }
    );

export default createAppContainer(AppNavigator);
