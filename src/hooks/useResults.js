import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const SearchAPI = async (searchTerm, locationTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: locationTerm,
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Shomething Went Wrong");
    }
  };

  useState(() => {
    SearchAPI("pasta", "San Jose");
  }, []);

  return [SearchAPI, results, errorMessage];
};
