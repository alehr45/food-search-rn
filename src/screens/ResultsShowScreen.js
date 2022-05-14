import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.viewStyles}>
      <Text style={styles.titleStyles}>{result.name}</Text>
      <Text style={styles.subtitleStyles}>{result.display_phone}</Text>
      {result.hours[0].is_open_now === true ? (
        <Text style={{ paddingBottom: 20, fontSize: 15 }}>
          - Currently Open -
        </Text>
      ) : (
        <Text style={{ paddingBottom: 20, fontSize: 15 }}>
          - Currently Closed -
        </Text>
      )}

      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyles} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyles: {
    height: 250,
    width: 400,
    padding: 25
  },
  titleStyles: {
    fontSize: 25,
    fontWeight: "bold",
    paddingTop: 10,
    textAlign: "center"
  },
  subtitleStyles: {
    fontSize: 20,
    padding: 3
  },
  viewStyles: {
    alignItems: "center"
  }
});

export default ResultsShowScreen;
