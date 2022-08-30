import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';

import CategoriesScreen from './screens/CategoriesScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import MealsOverViewScreen from './screens/MealsOverViewScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
SplashScreen.preventAutoHideAsync();
function DrawerNavigator() {
  return <DrawerNavigator screenOptions={{
          headerStyle: { backgroundColor:'#351401' },
          headerTintColor:"white",
          sceneContainerStyle:{backgroundColor:'#3f2f25'},
          drawerContentStyke:{backgroundColor: '#351401'},
          draweInactiveTintColor: 'white',
          drawerActiveTintColor: '#e4baa1',
  }} >
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
      title:'All Categories',
      drawerIcon: ({color, size}) => (<Ionicons name="list" color={color} size={size} />),
    }} />
    <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
      drawerIcon: ({color, size}) => (<Ionicons name="star" color={color} size={size} />),
    }} />
  </DrawerNavigator>
}


export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        //await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      console.log("app ready");
      await SplashScreen.hideAsync();
     
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }


  function appStart() {
    return (
      <>
    <StatusBar style='light' />
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={
          {headerStyle: { backgroundColor:'#351401' },
          headerTintColor:"white",
          contentStyle:{backgroundColor:'#3f2f25'}
          }}
          >
        <Stack.Screen 
        name="Drawer" 
        component={DrawerNavigator} 
        options={{
          headerShown: false
          
          }} />
        <Stack.Screen 
        name="MealsOverView" 
        component={MealsOverViewScreen} 
      
        />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{
          title:'About the Meal'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
    );
  }


  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onLayout={onLayoutRootView}>
      <Text>SplashScreen Demo! 👋</Text>
      <Entypo name="rocket" size={30} />
    
    
    
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={
          {headerStyle: { backgroundColor:'#351401' },
          headerTintColor:"white",
          contentStyle:{backgroundColor:'#3f2f25'}
          }}
          >
        <Stack.Screen 
        name="Drawer" 
        component={DrawerNavigator} 
        options={{
          headerShown: false
          
          }} />
        <Stack.Screen 
        name="MealsOverView" 
        component={MealsOverViewScreen} 
      
        />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{
          title:'About the Meal'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    
  },
});

// hello everyone. I'm new to react native. And I got Maximilian's react native practical guide. I'm stuck in lesson 111. In the lesson, Maximilian installs the drawer navigator, then installs the reanimated, then changes the reanimated back to the old version.