import cheerio from 'cheerio';
import { fetchData, menuNotFound } from '../helpers/index';

export const getEckoKantyna = async () => {
  const url =
    'https://www.prague-catering.cz/provozovny/Kantyna-ECKO/Denni-menu-kantyny-ECKO/';
  const data = await fetchData(url);
  const html = cheerio
    .load(data)('.cely')
    .html();

  if (!html) {
    return menuNotFound();
  }
  return html;
};
