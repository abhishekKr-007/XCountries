import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";

function Country() {
  const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => setFlags(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {flags.map((flag) => (
        <CountryCard
          key={flag.abbr}
          name={flag.name}
          flagImg={flag.flag}
          flagAltText={flag.abbr}
        />
      ))}
    </div>
  );
}
export default Country;
