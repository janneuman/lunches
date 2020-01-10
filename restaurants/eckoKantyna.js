import request from "request";
import cheerio from "cheerio";

export const getEckoKantyna = async () => {
  const html = await request.get('https://www.prague-catering.cz/provozovny/Kantyna-ECKO/Denni-menu-kantyny-ECKO/', (error, response, body) => {
    const $ = cheerio.load(body);
    return $('#hlavni .cely').html();
  });
  
  return html;
};
