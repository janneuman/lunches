import request from 'request';
import cheerio from 'cheerio';

export const test = (req, res) => {
  request('https://www.pivokarlin.cz/', (error, response, body) => {
    console.log('body', body);
    const $ = cheerio.load(body);
    
    const html = $('#carousel-lunchmenu').html();
    res.send(html);
  });
};
