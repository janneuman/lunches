import cheerio from 'cheerio';
import { fetchData, menuNotFound } from '../helpers/index';

export const getSalandaKarlin = async () => {
  const url = 'https://www.restauracesalanda.cz/cs/salanda/karlin/';
  const data = await fetchData(url);
  const html = cheerio
    .load(data)('#daily-meals')
    .html();

  if (!html) {
    return menuNotFound();
  }
  return html;
};
