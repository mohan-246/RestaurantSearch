import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useState } from "react";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResults = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useState(() => {
    getResults(id);
  }, []);
  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.name}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    marginVertical: 10,
  },
  name: {
    fontWeight: "bold",
    marginTop: 10,
  },
});
