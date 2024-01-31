import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {color} from "react-native-elements/dist/helpers";

const DetailsScreen = ({ route }) => {
  const { character } = route.params;

  return (
    <View style={styles.container}>

      <Image source={{ uri: character.image }} style={styles.characterImage} />
      <View style={styles.characterNameContainer}>
        <Text style={styles.characterName}>{character.name}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Status:</Text>
          <Text style={{color: "white"}}>{character.status}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Species:</Text>
          <Text style={{color: "white"}}>{character.species}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Gender:</Text>
          <Text style={{color: "white"}}>{character.gender}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#121212',
    color : "white",
    height: '100%',
  },
  characterNameContainer: {
    backgroundColor: '#2e9d70',
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  characterName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  characterImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  detailsContainer: {
    width: '80%',
    color : "white",
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    color : "white",
  },
  detailLabel: {
    fontWeight: 'bold',
    color : "white",
  },
});

export default DetailsScreen;
