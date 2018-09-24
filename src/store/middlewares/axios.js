import axios from 'axios';

export const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL:  process.env.__APP_BASE_URL__ || '/api',
  responseType: 'json'
});
