import cheerio from 'cheerio';
import { fetchData, menuNotFound } from '../helpers/index';

export const getGastroKarlin = async () => {
  const url = 'https://www.gastrokarlin.cz/';
  const data = await fetchData(url);
  const html = cheerio
    .load(data)('#menu .et_pb_row_fullwidth')
    .html();

  if (!html) {
    return menuNotFound();
  }
  return html;
};
