import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [SearchAPI, results, errorMessage] = useResults();
  const [location, setLocation] = useState("San Jose");

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => SearchAPI(term, location)}
        onLocationChange={setLocation}
        onLocationSubmit={() => SearchAPI(term, location)}
        location={location}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="A Bit More Pricier"
        />
        <ResultsList
          results={filterResultsByPrice("$$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
