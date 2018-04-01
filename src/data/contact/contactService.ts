import endpoints from '../../app/endpoints';
import API from '../../common/API';

export const getContacts = (): Promise<any> => API.get(endpoints.contacts);
