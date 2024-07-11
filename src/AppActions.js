export const getServicesStatuses = async(baseApiUrl, token) => {
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);
  const response = await fetch(`${baseApiUrl}/api/delivery/v1/services/status`, {
      headers
  });
  return response.json();
};
