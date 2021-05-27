import WeekReport from './WeekReport';
import DayReport from './DayReport';
function WeatherReport(props) {
    return (
        <>
            
            <div>
                {props.activeScreen === 'DAY_REPORT' ? <DayReport {...props}> </DayReport> : <WeekReport {...props}></WeekReport>}
            </div>
        </>
    )
}


export default WeatherReport;