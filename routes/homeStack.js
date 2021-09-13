
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const screens = {
    'Home Page':{
        screen: Home
    },
    'Review Details Page':{
        screen : ReviewDetails
    },
}
const HomeStack = createNativeStackNavigator(screens);

export default createAppContainer(HomeStack);