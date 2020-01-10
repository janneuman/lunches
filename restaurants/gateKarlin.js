import cheerio from 'cheerio';
import { fetchData } from '../helpers/index';

export const getGateKarlin = async () => {
  const url = 'http://www.gate-restaurant.cz/ajax/cs/menu/getmenu/0?type=day';
  const data = await fetchData(url, 'json');
  return cheerio.load(data.menu).html();
};
