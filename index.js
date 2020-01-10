import express from 'express';
import { getEckoKantyna, getPivoKarlin } from './restaurants';


const app = express();
const port = 3000;
const router = express.Router();

app.get('/ecko', async (req, res) => {

  res.send(await getEckoKantyna())
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
