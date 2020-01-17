import http from 'http';
import https from 'https';
import fetch from 'node-fetch';
import config from "../config";

const httpAgent = new http.Agent({
  keepAlive: true,
});
const httpsAgent = new https.Agent({
  keepAlive: true,
});

const options = {
  agent: function(_parsedURL) {
    if (_parsedURL.protocol == 'http:') {
      return httpAgent;
    } else {
      return httpsAgent;
    }
  },
  method: 'GET',
};

export const fetchData = async (url, type) => {
  try {
    const response = await fetch(url, options);
    if (type === 'json') {
      return response.json();
    }

    return response.text();
  } catch (error) {
    console.log(error);
  }
};

export const fetchZomatoDailyMenu = async (resId) => {
  const url = `${config.zomatoApiUrl}/dailymenu?res_id=${resId}`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'user_key': config.zomatoApiKey,
      },
    });
    return response.json();

  } catch (error) {
    console.log(error);
  }
};

export const fetchZomatoRestaurantInfo = async (name) => {
  const encodedName = encodeURI(name);
  const url = `${config.zomatoApiUrl}/search?q=${encodedName}`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'user_key': config.zomatoApiKey,
      },
    });
    return response.json();

  } catch (error) {
    console.log(error);
  }
};

export const getZomatoDailyMenuList = dailyMenus => {
  const today = new Date().getDate();
  const finalMenu = [];

  dailyMenus.forEach(oneDayMenu => {
    const menu = oneDayMenu.daily_menu;
    const menuStartDay = new Date(menu.start_date).getDate();

    if (menuStartDay === today) {
      menu.dishes.map(dish => finalMenu.push({
        name: dish.dish.name,
        price: dish.dish.price,
      }));
    }
  });
  return finalMenu;
};

export const menuNotFound = () => '<h3>Nic tady neni!</h3>';
