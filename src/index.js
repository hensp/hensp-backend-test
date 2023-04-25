import express from "express";
import medicamentoRoutes from "./routes/medicamento.routes.js"; //importamos desde employees route las rutas
import indexRouter from "./routes/index.routes.js";

const app = express();

app.use(express.json()); //sirve par que la ruta los lean en formato json, se pone antes de las rutas

app.use(indexRouter);
app.use("/api", medicamentoRoutes); //esto se hace para poder usar employees.router.js

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoin not found",
  });
});

app.listen(3000);
console.log(" server corriendo en el puerto 3000");
