import path from 'path';
import express from 'express';
import {
  getEckoKantyna,
  getPivoKarlin,
  getSalandaKarlin,
  getGastroKarlin,
  getSklizenoMyfood,
  getSpojkaKarlin,
} from './restaurants';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.get('/ecko', async (req, res) => {
  res.send(await getEckoKantyna());
});

app.get('/pivo-karlin', async (req, res) => {
  res.send(await getPivoKarlin());
});

app.get('/salanda', async (req, res) => {
  res.send(await getSalandaKarlin());
});

app.get('/gastro-karlin', async (req, res) => {
  res.send(await getGastroKarlin());
});

app.get('/sklizeno-myfood', async (req, res) => {
  res.send(await getSklizenoMyfood());
});

app.get('/spojka-karlin', async (req, res) => {
  res.send(await getSpojkaKarlin());
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
