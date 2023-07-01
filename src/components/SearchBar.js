import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import useResults from "../hooks/useResults";
import { Entypo } from "@expo/vector-icons";

const SearchBar = ({
  term,
  onTermChange,
  onTermSubmit,
  location,
  onLocationChange,
  onLocationSubmit,
}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle1} />
      <TextInput
        placeholder="search"
        style={styles.inputStyle1}
        value={term}
        onChangeText={onTermChange}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
      <Entypo name="location-pin" style={styles.iconStyle2} color="black" />
      <TextInput
        placeholder="Location"
        style={styles.inputStyle2}
        value={location}
        onChangeText={onLocationChange}
        autoCorrect={false}
        onEndEditing={onLocationSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  inputStyle1: {
    fontSize: 18,
    flex: 2,
  },
  inputStyle2: {
    fontSize: 18,
    flex: 1,
  },
  iconStyle1: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  iconStyle2: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 5,
  },
});
