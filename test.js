import { getPivoKarlin } from './restaurants/pivoKarlin';
import { getEckoKantyna } from './restaurants/eckoKantyna';

export const test = async (req, res) => {
  res.send(getEckoKantyna())
};
