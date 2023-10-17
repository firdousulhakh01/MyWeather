import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Components/Header/Header";
import WeatherData from "./Components/WeatherData/WeatherData";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [wethr, setWethr] = useState()
  const [loc, setLoc] = useState()
  const [latAndLog, setLatAndLog] = useState()
  const API_KEY = 'd42421c648dfb2218a102d61baee8692';
  const API_URL1 = `https://api.openweathermap.org/geo/1.0/direct`;
  const API_URL2 = `https://api.openweathermap.org/data/2.5/weather`;

  const handleSearch = () => {
    axios.get(API_URL1, {
      params: {
        q: `${loc}`,
        units: 'metric',
        appid: API_KEY,
      }
    }).then(response => {
      // console.log(response.data);
      setLatAndLog({ lat: response.data[0].lat, lon: response.data[0].lon, place: response.data[0].name, country: response.data[0].country })
    }).catch(error => {
      // console.log(error);
      alert("Weather details not available!")
    });

  }

  const handleInput = (e) => {
    setLoc(e.target.value)
    // console.log(e.key)

  }

  useEffect(() => {

    if (latAndLog) {
      axios.get(API_URL2, {
        params: {
          lat: latAndLog.lat,
          lon: latAndLog.lon,
          units: 'metric',
          appid: API_KEY,
        }
      }).then(response => {
        // console.log(response.data);
        setWethr({ tem: response.data.main.temp, pre: response.data.main.pressure, feel_tem: response.data.main.feels_like, hum: response.data.main.humidity })
      }).catch(error => {
        console.log(error);
      });
    }

  }, [latAndLog])

  return (
    <>
      <Header />
      <SearchBar inFn={handleInput} serFn={handleSearch} />
      {wethr && <WeatherData geoCo={latAndLog} wethrDa={wethr} />}

    </>
  );
}

export default App;
