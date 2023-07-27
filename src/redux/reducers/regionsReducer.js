// src/store/reducers/regionReducer.js
import {
  SET_REGION_DATA,
  FETCH_REGION_DATA_REQUEST,
  FETCH_REGION_DATA_SUCCESS,
  FETCH_REGION_DATA_FAILURE,
  FETCH_REGIONINFO_DATA_REQUEST,
  FETCH_REGIONINFO_DATA_SUCCESS,
  FETCH_REGIONINFO_DATA_FAILURE,
} from "../actions/regionActionTypes";

const initialRegionsState = {
  regions: [],
  loading: false,
  error: null,
};

export const regionReducer = (state = initialRegionsState, action) => {
  switch (action.type) {
    case FETCH_REGION_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_REGION_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        regions: action.payload,
      };
    case FETCH_REGION_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


const initialRegionInfoState = {
  regionsInfo: [],
  loading: false,
  error: null,
};

export const regionInfoReducer = (state = initialRegionInfoState, action) => {
  switch (action.type) {
    case FETCH_REGIONINFO_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_REGIONINFO_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        regionsInfo: action.payload,
      };
    case FETCH_REGIONINFO_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};