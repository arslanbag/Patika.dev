import React from 'react'
import { NavigationContainer, RouteConfig } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { START_SCREEN } from "@env" 

import CategoryListScreen from '../../Screens/CategoryListScreen';
import ProductListScreen from '../../Screens/ProductListScreen';
import ProductDetailScreen from '../../Screens/ProductDetailScreen';
import { View } from 'react-native';


const Stack = createNativeStackNavigator();

function Router({navigation}: any) {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={START_SCREEN}
     screenOptions={{
      headerTitleStyle: { color: '#ffa500' , fontSize:18},
  }}
    >
      <Stack.Group screenOptions={{ headerTitleAlign:'center'}}>
        <Stack.Screen options={{ title: 'Meals'}}  name="ProductListScreen" component={ProductListScreen} />
        <Stack.Screen  options={{ title: 'Categories'}} name="CategoryListScreen" component={CategoryListScreen} />
        <Stack.Screen  options={{ title: 'Details'}} name="ProductDetailScreen" component={ProductDetailScreen} />
      </Stack.Group>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router

