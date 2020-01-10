import cheerio from 'cheerio';
import { fetchData } from '../helpers/index';

export const getEckoKantyna = async () => {
  const url =
    'https://www.prague-catering.cz/provozovny/Kantyna-ECKO/Denni-menu-kantyny-ECKO/';
  const data = await fetchData(url);
  return cheerio
    .load(data)('.cely')
    .html();
};
