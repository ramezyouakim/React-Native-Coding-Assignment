import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/**Screens Imports */
import HomeScreen from './src/screens/homeScreen'

/**Navigation Stack */
const AppNav = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
});


export default createAppContainer(AppNav);