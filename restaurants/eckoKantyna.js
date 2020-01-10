import request from "request";
import cheerio from "cheerio";
import fetch from "node-fetch";

export const getEckoKantyna = async () => {
  // console.log('aaaa')
  // const getData = async () => await fetch('https://www.prague-catering.cz/provozovny/Kantyna-ECKO/Denni-menu-kantyny-ECKO/')
  // const response = await getPage()
  // await request.get(
  //   'https://www.prague-catering.cz/provozovny/Kantyna-ECKO/Denni-menu-kantyny-ECKO/',
  //   (error, response, body) => {
  //   const $ = cheerio.load(body);
  //   const a = $('.cely').html();
  //   console.log(a, '_________gggg');
  //   return a;
  // });



  const url = "https://www.prague-catering.cz/provozovny/Kantyna-ECKO/Denni-menu-kantyny-ECKO/";
  const getData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.text();
      console.log(json, 'QQQQQQQQ');
      return json
    } catch (error) {
      console.log(error);
    }
  };
  const page = await getData(url);
  console.log(page, '------page')
  const $ = cheerio.load(page);
  const a = $('.cely').html();
  console.log(a, '------a')
  return a;
};


