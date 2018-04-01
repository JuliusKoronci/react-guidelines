import endpoints from '../../app/endpoints';
import API from '../../common/API';

export const getContacts = () => API.get(endpoints.contacts);
