import express from "express";
import { getAllChocolates } from "./cacaoTrybe.js";

const app = express();
app.use(express.json())

console.log('teste');

app.get("/chocolates", async (req, res) => {
  res.status(200).json(await getAllChocolates());
});

app.listen(3333);

export default app

