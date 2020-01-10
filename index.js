import express from 'express';
import { test } from './test';

const app = express();
const port = 3000;

app.get('/', test);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
