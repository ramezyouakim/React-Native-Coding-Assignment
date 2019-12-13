import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/**Screens Imports */
import HomeScreen from './src/screens/homeScreen';
import HotelRoomDetailsScreen from './src/screens/hotelRoomDetails';

/**Navigation Stack */
const AppNav = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  HotelRoomDetailsScreen: {
    screen: HotelRoomDetailsScreen,
    navigationOptions: {
      header: null,
    }
  }
});


export default createAppContainer(AppNav);