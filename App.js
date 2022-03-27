import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './components/screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Pesanan from './components/screens/Pesanan';
import Pembatalan from './components/screens/Cancel';
import HomeStack from './components/screens/HomeStack';
import Other from './components/screens/Other';

function CancelScreen() {
  return (
    <View style={{}}>
      <Pembatalan />
    </View>
  );
}

function OtherScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Other />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'HomeStack') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Pesanan Saya') {
              iconName = focused ? 'book' : 'book';
            } else if (route.name === 'Pembatalan') {
              iconName = focused ? 'close-circle' : 'close-circle';
            } else if (route.name === 'Lainnya') {
              iconName = focused ? 'reorder-three' : 'reorder-three';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#082f82',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="Pesanan Saya" component={Pesanan} />
        <Tab.Screen name="Pembatalan" component={CancelScreen} />
        <Tab.Screen name="Lainnya" component={OtherScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
