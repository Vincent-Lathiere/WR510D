import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoritesScreen = () => {
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const savedFavorites = await loadFavoritesFromStorage();
        setFavoriteCharacters(savedFavorites);
      } catch (error) {
        console.error('Error loading favorites:', error);
      }
    };

    if (isFocused) {
      loadFavorites();
    }
  }, [isFocused]);

  const loadFavoritesFromStorage = async () => {
    try {
      const favoritesFromStorage = await AsyncStorage.getItem('favoriteCharacters');
      return JSON.parse(favoritesFromStorage) || [];
    } catch (error) {
      throw new Error('Error loading favorites from storage:', error);
    }
  };

  const renderCharacterItem = ({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('Details', { character: item })}>
        <Card containerStyle={styles.card}>
          <Card.Image source={{ uri: item.image }} style={styles.characterImage} />
          <Card.Title style={styles.characterContainer}>
            <Text style={styles.characterName}>{item.name}</Text>
          </Card.Title>
        </Card>
      </TouchableOpacity>
  );

  return (
      <FlatList
          data={favoriteCharacters}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} // Set the number of columns
          contentContainerStyle={styles.container}
          style={{ backgroundColor: '#121212' }}
          renderItem={renderCharacterItem}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  card: {
    width: 160,
    height: 220,
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#2e9d70',
  },
  characterName: {
    color: 'white',
    textAlign: 'center',
  },
  characterContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  characterImage: {
    borderRadius: 10,
  },
});

export default FavoritesScreen;
