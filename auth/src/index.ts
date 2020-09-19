import express from "express";
import { json } from "body-parser";
import { routers } from "./routes";
const app = express();
app.use(json());

routers.forEach((e) => app.use(e));
app.listen(3000, () => console.log("listening on 3000"));
