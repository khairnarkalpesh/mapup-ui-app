  import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import "boxicons/css/boxicons.min.css";
import FooterComponent from "./components/footer/Footer";
import HeaderComponent from "./components/header/Header";
import Maps from "./components/osmMap/OSMMap";
import SearchBox from "./components/SearchBox";
import DropdownBox from "./components/formInput/FormInput";
import RegionInfoCard from "./components/regionInfo/RegionInfo";
function App() {
  const [selectPosition, setSelectPosition] = useState({
    "place_id": 297834071,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "relation",
    "osm_id": 304716,
    "boundingbox": [
        "6.5531169",
        "35.6745457",
        "67.9544415",
        "97.395561"
    ],
    "lat": "22.3511148",
    "lon": "78.6677428",
    "display_name": "India",
    "class": "boundary",
    "type": "administrative",
    "importance": 0.947689135880987,
    "icon": "https://nominatim.openstreetmap.org/ui/mapicons/poi_boundary_administrative.p.20.png",
    "address": {
        "country": "India",
        "country_code": "in"
    }
});

  return (
    <div className="App">
      <Sidebar />
      <section className="home">
        <HeaderComponent />
        {/* <OSMMap /> */}
        <div style={{ width: "100%", height: "100%" }}>
          <Maps selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
        </div>
        <div style={{ width: "50vw" }}>
          <SearchBox
            selectPosition={selectPosition}
            setSelectPosition={setSelectPosition}
          />
          {/* <DropdownBox /> */}
        </div>
        <FooterComponent />
      </section>
    </div>
  );
}

export default App;
