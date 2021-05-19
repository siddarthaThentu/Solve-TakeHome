import axios from 'axios';
import qs from 'querystring';
import config from '../../../config';

const { api } = config;

export default async function makeRequest(path, resourceType) {
  const { data: { access_token: token } } = await axios.post(
    /* endpoint */,
    /* something here */,
    /* header stuff here */
  );

  const res = await axios.get(
    /* endpoint here */,
    /* header stuff here */
  );

  return res.data[resourceType].items;
}
