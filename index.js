import path from 'path';
import express from 'express';
import {
  getEckoKantyna,
  getPivoKarlin,
  getSalandaKarlin,
  getGastroKarlin,
  getSklizenoMyfood,
  getSpojkaKarlin,
  getGateKarlin,
  getGlobus,
} from './restaurants';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')))

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/api/ecko', async (req, res) => {
  res.send(await getEckoKantyna());
});

app.get('/api/pivo-karlin', async (req, res) => {
  res.send(await getPivoKarlin());
});

app.get('/api/salanda', async (req, res) => {
  res.send(await getSalandaKarlin());
});

app.get('/api/gastro-karlin', async (req, res) => {
  res.send(await getGastroKarlin());
});

app.get('/api/sklizeno-myfood', async (req, res) => {
  res.send(await getSklizenoMyfood());
});

app.get('/api/spojka-karlin', async (req, res) => {
  res.send(await getSpojkaKarlin());
});

app.get('/api/gate', async (req, res) => {
  res.send(await getGateKarlin());
});

app.get('/api/globus', async (req, res) => {
  res.send(await getGlobus());
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
