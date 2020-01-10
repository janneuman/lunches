import cheerio from 'cheerio';
import { fetchData } from '../helpers/index';

export const getGastroKarlin = async () => {
  const url = 'https://www.gastrokarlin.cz/';
  const data = await fetchData(url);
  return cheerio
    .load(data)('#menu .et_pb_row_fullwidth')
    .html();
};
