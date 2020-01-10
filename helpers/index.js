import http from 'http';
import https from 'https';
import fetch from "node-fetch";

const httpAgent = new http.Agent({
  keepAlive: true
});
const httpsAgent = new https.Agent({
  keepAlive: true
});

const options = {
  agent: function (_parsedURL) {
    if (_parsedURL.protocol == 'http:') {
      return httpAgent;
    } else {
      return httpsAgent;
    }
  },
  method: 'GET',
};

export const fetchData = async (url, type) => {
  try {
    const response = await fetch(url, options);
    if (type === 'json') {
      return response.json();
    }

    return response.text();
  } catch (error) {
    console.log(error);
  }
};
