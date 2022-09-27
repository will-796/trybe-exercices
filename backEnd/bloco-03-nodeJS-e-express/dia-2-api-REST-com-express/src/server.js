import express from "express";
import activities from "./data/activities.js";

const app = express();

app.get("/activities", (req, res) => {
  res.status(200).json(activities);
});

app.get("/activities/:id", (req, res) => {
  const { id } = req.params;
  const result = activities.find((element) => (element.id === id));
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ status_code: 404, message: "id não encontrado" });
  }
});
app.get("/filter/activities", (req, res) => {
  const { status } = req.query;
  const result = activities.find((element) => (element.status === status))
  if (result) {
    res.status(200).json(result)
  } else {
    res.status(404).json({ status_code: 404, message: "status não encontrado" });
  }
});

app.listen(3001);
