if (process.env.NODE_ENV !== 'production') {
  try {
    require('dotenv').config();
  } catch (err) {
    throw err;
  }
}

export default {
  serverPort: process.env.PORT || 3000,
  zomatoApiKey: process.env.ZOMATO_API_KEY || '',
  zomatoApiUrl: 'https://developers.zomato.com/api/v2.1',
};
