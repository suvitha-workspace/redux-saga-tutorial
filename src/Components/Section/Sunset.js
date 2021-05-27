import './Day.css'
import { WiDaySunny, WiMoonAltWaxingCrescent6 } from "weather-icons-react";
function Sunset(props) {
    return (
        <>
        <div className='dayWrapper'>
            <div className='dayHeader'>SUNRISE/SUNSET</div>
            <div className='dayDetails'>
            <div className='dayContainer'>
                <div className='dayRow'>
                    <div className="dayColumn1"><WiDaySunny size={35} color='#00000'></WiDaySunny></div>
                    <div className="dayColumn2">{'12 hrs'}</div>
                </div>
                <div className='dayRow'>
                    <div className="dayColumn1">Rise</div>
                    <div className="dayColumn2">{props.selectedData.sunDetails.mSunRise}</div>
                </div>
                <div className='dayRow'>
                    <div className="dayColumn1">Set</div>
                    <div className="dayColumn2">{props.selectedData.sunDetails.mSunSet}</div>
                </div>
            </div>
            <div className='dayContainer'>
                <div className='dayRow'>
                    <div className="dayColumn1">
                        <WiMoonAltWaxingCrescent6 size={35} color='#00000'></WiMoonAltWaxingCrescent6>
                    </div>
                    <div className="dayColumn2">{'12 hrs'}</div>
                </div>
                <div className='dayRow'>
                    <div className="dayColumn1">Rise</div>
                    <div className="dayColumn2">{props.selectedData.sunDetails.eSunRise}</div>
                </div>
                <div className='dayRow'>
                    <div className="dayColumn1">Set</div>
                    <div className="dayColumn2">{props.selectedData.sunDetails.eSunSet}</div>
                </div>
            </div>
            </div> 
            </div>
        </>
    );
}

export default Sunset;