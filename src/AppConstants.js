const API_GATEWAY = 'https://api.zby.icdc.io';
export const LOCATION_DATA_FETCH_URL = `${process.env.API_GATEWAY || API_GATEWAY}/api/accounts/v1/locations/{locationName}`;
