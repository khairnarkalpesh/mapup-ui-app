// src/store/actions/regionActions.js
import {
  SET_REGION_DATA,
  FETCH_REGION_DATA_REQUEST,
  FETCH_REGION_DATA_SUCCESS,
  FETCH_REGION_DATA_FAILURE,
  FETCH_REGIONINFO_DATA_REQUEST,
  FETCH_REGIONINFO_DATA_SUCCESS,
  FETCH_REGIONINFO_DATA_FAILURE,
} from "./regionActionTypes";

// Action creator to fetch the region data
export const getRegionData = () => {
  const regions = [
    {
      place_id: 297834071,
      licence:
        "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
      osm_type: "relation",
      osm_id: 304716,
      boundingbox: ["6.5531169", "35.6745457", "67.9544415", "97.395561"],
      lat: "22.3511148",
      lon: "78.6677428",
      display_name: "India",
      class: "boundary",
      type: "administrative",
      importance: 0.947689135880987,
      icon: "https://nominatim.openstreetmap.org/ui/mapicons/poi_boundary_administrative.p.20.png",
      address: {
        country: "India",
        country_code: "in",
      },
    },
    {
      place_id: 297714218,
      licence:
        "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
      osm_type: "relation",
      osm_id: 148838,
      boundingbox: ["-14.7608358", "71.5889534", "-180", "180"],
      lat: "39.7837304",
      lon: "-100.445882",
      display_name: "United States",
      class: "boundary",
      type: "administrative",
      importance: 0.9356913674575887,
      icon: "https://nominatim.openstreetmap.org/ui/mapicons/poi_boundary_administrative.p.20.png",
      address: {
        country: "United States",
        country_code: "us",
      },
    },
    {
      place_id: 297570847,
      licence:
        "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
      osm_type: "relation",
      osm_id: 62149,
      boundingbox: ["49.674", "61.061", "-14.015517", "2.0919117"],
      lat: "54.7023545",
      lon: "-3.2765753",
      display_name: "United Kingdom",
      class: "boundary",
      type: "administrative",
      importance: 0.8723780132837334,
      icon: "https://nominatim.openstreetmap.org/ui/mapicons/poi_boundary_administrative.p.20.png",
      address: {
        country: "United Kingdom",
        country_code: "gb",
      },
    },
  ];

  return (dispatch) => {
    dispatch({ type: FETCH_REGION_DATA_REQUEST });

    // Assuming you make the API call here to fetch the region data
    fetch(
      "https://nominatim.openstreetmap.org/search?q=in&format=json&addressdetails=1&polygon_geojson=0"
    )
      .then((data) => {
        console.log(regions);
        dispatch({
          type: FETCH_REGION_DATA_SUCCESS,
          payload: regions,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_REGION_DATA_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const getRegionInfoData = (country_code) => {
  const regionsInfo = [
    {
      name: "India",
      country_code: "in",
      currency: "INR",
      speedUnit: "kmph",
      distanceUnit: "kilometers",
      volumeUnit: "liters",
      timezone: "Asia/Kolkata",
    },
    {
      name: "United State",
      country_code: "us",
      currency: "USD",
      speedUnit: "mph",
      distanceUnit: "miles",
      volumeUnit: "gallons",
      timezone: "America/New_York",
    },
    {
      name: "United Kingdom",
      country_code: "gb",
      currency: "GBP",
      speedUnit: "mph",
      distanceUnit: "miles",
      volumeUnit: "liters",
      timezone: "Europe/London",
    },
  ];

  return (dispatch) => {
    dispatch({ type: FETCH_REGIONINFO_DATA_REQUEST });

    // Assuming you make the API call here to fetch the region data
    fetch(
      "https://nominatim.openstreetmap.org/search?q=in&format=json&addressdetails=1&polygon_geojson=0"
    )
      .then((data) => {
        let res = regionsInfo.filter(
          (item) => item.country_code == country_code
        );
        dispatch({
          type: FETCH_REGIONINFO_DATA_SUCCESS,
          payload: res,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_REGIONINFO_DATA_FAILURE,
          payload: error.message,
        });
      });
  };
};
