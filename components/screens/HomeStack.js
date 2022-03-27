import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import OrderDetail from './OrderDetail';
import KonfirmasiOrder from './KonfirmasiOrder';

const HomeStack = createNativeStackNavigator();

const StackHome = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="OrderDetail" component={OrderDetail} />
      <HomeStack.Screen name="KonfirmasiOrder" component={KonfirmasiOrder} />
    </HomeStack.Navigator>
  );
};

export default StackHome;
