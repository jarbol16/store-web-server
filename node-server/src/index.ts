import express from 'express';
import cors from 'cors';
import {ApiSetting} from './utilities/constans';
import items from './routes/items';

const app = express();
const PORT = ApiSetting.port;

app.use(cors({
    origin: ApiSetting.cors
}))

app.use('/api/items', items);

app.listen(PORT, () => {
    console.log(`Server MercadoLibre running on port ${PORT}`)
})
