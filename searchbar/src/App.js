import logo from "./logo.svg";
import "./App.css";
import { useCallback, useEffect, useState } from "react";
import SearchBar from "./Component/SearchBar";
import { countryList } from "./Component/Country";

function App() {
  const [query, setQuery] = useState("");
  const [suggesstion, setSuggesstion] = useState([]);

  const queryHandler = useCallback((val) => {
    setQuery(val);
    console.log(val);
  }, []);

  useEffect(() => {
    // console.log("inside ue of app");
    if (query == "") {
      setSuggesstion([]);
    } else {
      const newcountryList = countryList.filter((item) => {
        return item.country
          .toLowerCase()
          .indexOf(query.trim().toLowerCase()) !== -1
          ? true
          : false;
      });
      // console.log(newcountryList)
      setSuggesstion(newcountryList);
    }
  }, [query]);

  return (
    <div className="App">
      <div> Query = {query}</div>
      <SearchBar setQuery={queryHandler} suggesstion={suggesstion} />
    </div>
  );
}

export default App;
