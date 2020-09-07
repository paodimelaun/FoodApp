import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import RestaurantScreen from "./src/screens/RestaurantScreen";

const navigator  = createStackNavigator({
 Search:SearchScreen,
 Restaurant:RestaurantScreen
},{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title:'BusinessSearch'
  }
});
export default createAppContainer(navigator);