import cheerio from 'cheerio';
import { fetchData } from '../helpers/index';

export const getSalandaKarlin = async () => {
  const url =
    'https://www.restauracesalanda.cz/cs/salanda/karlin/';
  const data = await fetchData(url);
  return cheerio
    .load(data)('#daily-meals')
    .html();
};
