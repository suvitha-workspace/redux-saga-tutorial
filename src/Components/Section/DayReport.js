import './Day.css'
import Sunset from './Sunset'
import Details from './Details'
import { WiDirectionLeft }
    from 'weather-icons-react';
function DayReport(props) {

    return (
        <>
            <div className='ocontainer'>

                {/* <div className='icontainer'> */}
                <div className='dayHeader' onClick={props.loadWeatherDetails}>
                    <div className='dayRow'>
                        <div className='mainColumn1'>
                            <WiDirectionLeft size={40} color='#00000'></WiDirectionLeft>
                            <div className='mainColumn3'>BACK</div>
                        </div>
                        <div className='mainColumn2'>{props.selectedData.subTitle}</div>
                    </div>
                </div>
                <div className='seperator'></div>
                <Details {...props}></Details>
                <div className='seperator'></div>
                <Sunset {...props}></Sunset>
                <div className='seperator'></div>
                {/* </div>                 */}
            </div>
        </>
    )
}


export default DayReport;