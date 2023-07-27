import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import DropdownBox from "../formInput/FormInput";
import RegionInfoCard from "../regionInfo/RegionInfo";
import { useSelector, useDispatch } from "react-redux";
import {
  getRegionData,
  getRegionInfoData,
} from "../../redux/actions/regionActions";

const icon = L.icon({
  iconUrl: "./placeholder.png",
  iconSize: [38, 38],
});

const position = [51.505, -0.09];

function ResetCenterView(props) {
  const { selectPosition } = props;

  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true,
        }
      );
    }
  }, [selectPosition]);

  return null;
}

export default function Maps(props) {
  const { selectPosition, setSelectPosition } = props;
  // const [selectPosition, setSelectPosition] = useState(null);
  const dispatch = useDispatch();
  const regions = useSelector((state) => state.regions.regions);
  console.log("regions", regions);

  const locationSelection = [selectPosition?.lat, selectPosition?.lon];

  useEffect(() => {
    dispatch(getRegionData());
  }, [dispatch]);

  return (
    <MapContainer
      center={position}
      zoom={8}
      style={{ width: "100%", height: "100%" }}
    >
      <DropdownBox
        selectPosition={selectPosition}
        setSelectPosition={setSelectPosition}
        regions={regions}
      />
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=WsRcyMR4WXfDWRmJ7jGT"
      />
      {selectPosition && (
        <Marker position={locationSelection} icon={icon}>
          {/* <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> */}
          <RegionInfoCard />
        </Marker>
      )}
      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  );
}
