import './Day.css'
import { WiDaySunnyOvercast, WiDayLightWind, WiDayThunderstorm, WiDaySunny, } from "weather-icons-react";
function Details(props) {
    const renderWeatherIcon = (range) => {
        switch (true) {
            case range <= 200:
                return <WiDayThunderstorm size={100} color='#ebdb00' />;
            case range >= 200 && range < 300:
                return <WiDayLightWind size={100} color='#ebdb00'></WiDayLightWind>
            case range >= 300 && range < 400:
                return <WiDaySunnyOvercast size={100} color='#ebdb00' />;
            default:
                return <WiDaySunny size={100} color='#ebdb00' />
        }
    }
    return (
        <>
            <div className='dayWrapper'>
                <div className='dayHeader'>
                    <div>DAY</div>
                    <div>{renderWeatherIcon(props.selectedData.rangeId)}</div>
                    <div className='bigFont'>{props.selectedData.tempMax}</div>
                </div>
                <div className='dayHeader'>Intervals of clouds and sunshine</div>
                <div className='dayDetails'>
                    <div className='dayContainer'>
                        <div className='dayRow'>
                            <div className="dayColumn1">Wind</div><div className="dayColumn2">{props.selectedData.wind}</div>
                        </div>
                        <div className='dayRow'>
                            <div className="dayColumn1">Wind Gusts</div><div className="dayColumn2">{props.selectedData.windGuts}</div>
                        </div>
                        <div className='dayRow'>
                            <div className="dayColumn1">Humidity</div><div className="dayColumn2">{props.selectedData.humidity}</div>
                        </div>
                        <div className='dayRow'>
                            <div className="dayColumn1">Dew Point</div><div className="dayColumn2">{props.selectedData.dewPoint}</div>
                        </div>

                    </div>
                    <div className='dayContainer'>
                        <div className='dayRow'>
                            <div className="dayColumn1">Probability of Precipitation</div><div className="dayColumn2">{props.selectedData.probPrecitation}</div>
                        </div>
                        <div className='dayRow'>
                            <div className="dayColumn1">Precipitation</div><div className="dayColumn2">{props.selectedData.Precipitation}</div>
                        </div>
                        <div className='dayRow'>
                            <div className="dayColumn1">Cloud Cover</div><div className="dayColumn2">{props.selectedData.cloudCover}</div>
                        </div>
                        <div className='dayRow'>
                            <div className="dayColumn1">ThunderStrom</div><div className="dayColumn2">{props.selectedData.thunderStorm}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details;