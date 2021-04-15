import axios from 'axios';

export default axios.create({
  baseURL: process.env.BASEURL,
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
});
