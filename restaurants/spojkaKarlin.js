import cheerio from 'cheerio';
import { fetchData } from '../helpers/index';

export const getSpojkaKarlin = async () => {
  const url =
    'https://www.spojka-karlin.cz/menu/';
  const data = await fetchData(url);
  return cheerio
    .load(data)('.daily-menu .day-menu')
    .html();
};
