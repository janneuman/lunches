import cheerio from 'cheerio';
import { fetchData } from '../helpers';

export const getPivoKarlin = async () => {
  const url = 'https://www.pivokarlin.cz/';
  const data = await fetchData(url);
  return cheerio
    .load(data)('#carousel-lunchmenu .carousel-item.active')
    .html();
};
