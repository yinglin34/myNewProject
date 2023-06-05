import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer, StackActions } from "@react-navigation/native";
import {SafeAreaProvider}from "react-native-safe-area-context";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

//import pages
import Home from './src/pages/Home';
import Account from  './src/pages/Account';

//create the bottom tab
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    
   <SafeAreaProvider>
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) =>({
        tabBarIcon: ({ color,size}) => {
          let iconName;
          if (route.name == "Home"){
            iconName = "home";
          } else if (route.name === "Account"){
            iconName = "account";
          }

          return (
            <MaterialCommunityIcons
            name={iconName}
            size={30}
            color={color}
            style={{height: 30 }}
          />
        );
      }
      })}
      >
        <Tab.Screen name = "Home" component={Home}></Tab.Screen>
        <Tab.Screen name = "Account" component={Account}></Tab.Screen>
       </Tab.Navigator>

      </NavigationContainer>
    </SafeAreaProvider>
  );
 }

    
export default App
