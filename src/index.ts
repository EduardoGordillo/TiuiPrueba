/**
 * Modulos externos requeridos
*/

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "../items/items.router";

dotenv.config();


/** 
 * Variables de la app
 * */

if(!process.env.PORT){
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string,10);
const app = express();

/** 
 * Configuracion de la app
 **/

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/", itemsRouter)
/** Activacion del servidor */

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})