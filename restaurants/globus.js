import cheerio from 'cheerio';
import { fetchData } from '../helpers/index';

export const getGlobus = async () => {
  const url = 'https://restauraceglobus.cz/poledni-menu/';
  const data = await fetchData(url);
  return cheerio
    .load(data)('.entry-content')
    .html();
};
