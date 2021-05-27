import { LOAD_WEATHER_DETAILS, LOAD_WEATHER_DETAILS_SUCCESS,LOAD_WEATHER_DETAILS_FAILURE, SELECTED_DAY_DETAILS, UPDATE_WEATHER_DETAILS } from "../constants/action-types";


export function loadWeatherDetails(weekNo) {
    return {
        type: LOAD_WEATHER_DETAILS,
        weekNo
    };
}
export function loadWeatherDetailsSuccess(response)
{
    return {
        type: LOAD_WEATHER_DETAILS_SUCCESS,
        response
    }
}

export function loadWeatherDetailsFailure(error)
{
    return {
        type: LOAD_WEATHER_DETAILS_FAILURE,
        error
    }
}

export function updateWeatherDetails(payload) {
    return {
        type: UPDATE_WEATHER_DETAILS,
        payload
    }
}

export function getSelectedDayDetails(id) {
    return {
        type: SELECTED_DAY_DETAILS,
        id
    }
}