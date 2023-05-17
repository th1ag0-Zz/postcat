import axios from 'axios';

const api = axios.create({
  baseURL: '/mock.json',
});

export { api };
