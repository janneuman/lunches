import cheerio from 'cheerio';
import { fetchData } from '../helpers/index';

export const getTankovnaKarlin = async () => {
  const url = 'https://www.zomato.com/widgets/daily_menu.php?entity_id=18057566';
  const data = await fetchData(url);
  console.log('AAAAA', cheerio.load(data)('#menu-preview'));
  // return cheerio.load(data)('#menu-preview').html();
};
