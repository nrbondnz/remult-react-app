import express from "express";
import { api } from "./api.js";

const app = express();
app.use(api);

app.get("*", (req, res) => {
    console.log("req.url: ", req.url);
    res.send(`Hi mum api Server - path: "${req.path}"`)
});

app.listen(3002, () => console.log("Server started"));
