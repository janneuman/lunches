import { getPivoKarlin } from './restaurants/pivoKarlin';
import { getEckoKantyna } from './restaurants/eckoKantyna';

export const test = async (req, res) => {
  const s = await getEckoKantyna();
  console.log('asss')
  res.send(s);
};
