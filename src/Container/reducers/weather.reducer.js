import { LOAD_WEATHER_DETAILS,LOAD_WEATHER_DETAILS_SUCCESS,LOAD_WEATHER_DETAILS_FAILURE, SELECTED_DAY_DETAILS, UPDATE_WEATHER_DETAILS } from "../constants/action-types";

const initialState = {
  weeklyData: [],
  activeScreen: 'WEEK_REPORT',
  selectedData: null,
  currentWeekNo: 1,
  totalWeatherData: 0,
  loading: false,
  maxWeek: 3,
};

function WeatherReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_WEATHER_DETAILS:
      return {
        ...state,
        loading: true,
        activeScreen: 'WEEK_REPORT',
      }
    case LOAD_WEATHER_DETAILS_FAILURE:
      return{
        ...state,
        loading: false,
        error: action.error,
      }
    case LOAD_WEATHER_DETAILS_SUCCESS:
      let prevWeather= state.weeklyData;
      if (!prevWeather) prevWeather = [];
      const newCollection = prevWeather.concat(action.response.weekDays);
      const lastWeekNo = action.response.weekNo;

      return {
        ...state,
        loading: false,
        weeklyData: newCollection,
        totalWeatherData: newCollection.length,        
        currentWeekNo: lastWeekNo,
      };
    
    case UPDATE_WEATHER_DETAILS:
      return {
        ...state,
        weeklyData: action.payload,
        activeScreen: 'WEEK_REPORT',
      }
    case SELECTED_DAY_DETAILS:
      return {
        ...state,
        selectedData: state.weeklyData?.find((d) => d.id === action.id),
        activeScreen: 'DAY_REPORT',
      }
    
    default:
      return {
        ...state,
      };
  }
};

export default WeatherReducer;
