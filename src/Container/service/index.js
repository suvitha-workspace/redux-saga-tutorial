import { connect } from "react-redux";
import App from "../../App";
import * as actions from "./weather.action";

const mapStateToProps = (state) => {
  return {
    weeklyData: state.weatherStore.weeklyData,
    activeScreen: state.weatherStore.activeScreen,
    selectedData: state.weatherStore.selectedData, 
    currentWeekNo: state.weatherStore.currentWeekNo,
    totalWeatherData: state.weatherStore.totalWeatherData, 
    loading: state.weatherStore.loading,
    maxWeek: state.weatherStore.maxWeek,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    updateWeatherDetails: (payload) => dispatch(actions.updateWeatherDetails(payload)),
    loadWeatherDetails: (weekNo) => dispatch(actions.loadWeatherDetails(weekNo)),
    getSelectedDayDetails: (id) => dispatch(actions.getSelectedDayDetails(id)),
  }    
};
const MainPage = connect(mapStateToProps, mapDispachToProps)(App);
export default MainPage;
