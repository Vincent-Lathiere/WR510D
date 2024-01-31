import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import RickAndMortyComponent from './rick.jsx';
import DetailsScreen from './DetailsScreen.jsx';
import FavoritesScreen from './FavoritesScreen.jsx';
import SearchScreen from './SearchScreen.jsx';
import ProfileScreen from './ProfileScreen.jsx';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#2e9d70',
                    labelStyle: {
                        fontSize: 12,
                    },
                    style: {
                        backgroundColor: 'yellow',
                    },
                }}
            >
                <Tab.Screen
                    name="Rick & Morty"
                    component={RickStack}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home-outline" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Recherche"
                    component={SearchScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="search-outline" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Favoris"
                    component={FavoritesScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="heart-outline" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profil"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="person-outline" size={size} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};


const RickStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                // Set background color for the entire Stack.Navigator
                cardStyle: { backgroundColor: 'black' },
            }}
        >
            <Stack.Screen name="Rick" component={RickHomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
};

const RickHomeScreen = () => {
    return <RickAndMortyComponent />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4dffb6',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
