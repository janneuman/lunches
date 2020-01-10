import cheerio from 'cheerio';
import { fetchData, menuNotFound } from '../helpers/index';

export const getSpojkaKarlin = async () => {
  const url = 'https://www.spojka-karlin.cz/menu/';
  const data = await fetchData(url);
  const html = cheerio
    .load(data)('.daily-menu .day-menu')
    .html();

  if (!html) {
    return menuNotFound();
  }
  return html;
};
