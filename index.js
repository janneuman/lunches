import express from 'express';
import { getEckoKantyna, getPivoKarlin, getSalandaKarlin } from './restaurants';


const app = express();
const port = 3000;

app.get('/ecko', async (req, res) => {
  res.send(await getEckoKantyna())
});

app.get('/pivo-karlin', async (req, res) => {
  res.send(await getPivoKarlin())
});

app.get('/salanda', async (req, res) => {
  res.send(await getSalandaKarlin())
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
