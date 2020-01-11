import cheerio from 'cheerio';
import moment from 'moment';
import { fetchData, menuNotFound } from '../helpers/index';

export const getSklizenoMyfood = async () => {
  const url = 'https://www.sklizeno.cz/o-nas/my-food-corso/';
  const data = await fetchData(url);
  const $ = cheerio.load(data);
  const weekday = moment().weekday();
  const html = $(`.jidla div:nth-child(${weekday})`).html();

  if (!html) {
    return menuNotFound();
  }
  return html;
};
