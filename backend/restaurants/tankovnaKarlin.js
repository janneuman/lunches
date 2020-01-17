import {
  fetchZomatoDailyMenu,
  getZomatoDailyMenuList,
  menuNotFound,
} from '../helpers/index';

export const getTankovnaKarlin = async () => {
  const resId = '18057566';
  const dailyMenu = await fetchZomatoDailyMenu(resId);

  if (
    dailyMenu.status === 'success' &&
    dailyMenu.daily_menus !== undefined &&
    dailyMenu.daily_menus.length > 0
  ) {
    return getZomatoDailyMenuList(dailyMenu.daily_menus);
  } else {
    return menuNotFound();
  }
};
