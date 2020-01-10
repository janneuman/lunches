import request from "request";
import cheerio from "cheerio";

export const getPivoKarlin = () => {
  request('https://www.pivokarlin.cz/', (error, response, body) => {
    const $ = cheerio.load(body);
    return $('#carousel-lunchmenu .carousel-item.active').html();
  });
};
