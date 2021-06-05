import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SquareScreen from './src/screens/SquareScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import CounterScreen from './src/screens/CounterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ImageScreen from './src/screens/ImageScreen';
import ListScreen from './src/screens/ListScreen';
import ColorScreen from './src/screens/ColorScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator(
  {
    Box: BoxScreen,
    Color: ColorScreen,
    Components: ComponentsScreen,
    Counter: CounterScreen,
    Home: HomeScreen,
    Image: ImageScreen,
    List: ListScreen,
    Square: SquareScreen,
    Text: TextScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
