import express from "express";
import { v4 as uuidv4 } from "uuid";
const port = 4000;
const app = express();
app.use(express.json());

const cars = [];

app.post("/cars", (request, response) => {
  const { model, brand, year, color, plate } = request.body;

  cars.push({
    model,
    brand,
    year,
    color,
    plate,
    id: uuidv4(),
  });

  return response.status(201).json(cars).send();
});

app.get("/cars", (request, response) => {
  return response.json(cars);
});

app.listen(port);
