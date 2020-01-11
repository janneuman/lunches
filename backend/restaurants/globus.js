import cheerio from 'cheerio';
import { fetchData, menuNotFound } from '../helpers/index';

export const getGlobus = async () => {
  const url = 'https://restauraceglobus.cz/poledni-menu/';
  const data = await fetchData(url);
  const html = cheerio
    .load(data)('.entry-content')
    .html();

  if (!html) {
    return menuNotFound();
  }
  return html;
};
