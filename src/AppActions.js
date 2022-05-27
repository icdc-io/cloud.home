import * as ActionTypes from './AppConstants';
import API from './Utilities/Api';

const processRequest = async (locationArg, urlArg) => {
    return {
        url: urlArg.replace('{locationName}', locationArg),
        headers: {
            Authorization: `Bearer ${window.insights.getToken()}`
        }
    };
};

const fetchData = async (locationArg, urlArg) => {
    const { url, headers } = await processRequest(locationArg, urlArg);
    const response = await API.get(url, headers);
    return response.data;
};

//GET
export const fetchLocationData = (location) => fetchData(location, ActionTypes.LOCATION_DATA_FETCH_URL);
