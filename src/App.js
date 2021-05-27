import './App.css';
import WeatherReport from './Components/Section/WeatherReport'

function App(props) {
  if (props.weeklyData && props.weeklyData.length === 0) {
    console.log(`props.weeklydata is null`);
    props.loadWeatherDetails(1);
  }
  return (
    <div>
      <WeatherReport {...props} />
    </div>
  );
}

export default App;
