import { config } from "dotenv";
import express from 'express';
import cors from 'cors';
config();
 //import { constants as APP_CONST } from "./constant/application";
import apiRoutes from "./routes/index"
import middlewaresConfig from "./config/middlewares"
import middlewares from "./middleware"
// import "./pre-data/setRadisObject"
// import { getCasinoUserBalanceQueue } from "./service/redisQueue.service";

const PATH = {
    API: "/api",
}

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Parsing game server is running');
});
middlewares(app)
middlewaresConfig(app)
app.use(PATH.API, apiRoutes)

const PORT = process.env.APP_PORT || 8000;


app.listen(PORT, (): void => {
    return console.log(`Express is listening at http://localhost:${process.env.APP_PORT || 8000}`)
});
