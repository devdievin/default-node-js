import express from "express";
import path from "path";
import cors from "cors";
import { routes } from "../routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, '../../public')));

app.use(routes);

export { app };