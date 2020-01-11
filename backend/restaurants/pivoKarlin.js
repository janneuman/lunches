import cheerio from 'cheerio';
import { fetchData, menuNotFound } from '../helpers';

export const getPivoKarlin = async () => {
  const url = 'https://www.pivokarlin.cz/';
  const data = await fetchData(url);
  const html = cheerio
    .load(data)('#carousel-lunchmenu .carousel-item.active')
    .html();

  if (!html) {
    return menuNotFound();
  }
  return html;
};
