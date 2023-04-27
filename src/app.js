import express from "express"
import medicineRoutes from "./routes/medicines.routes.js"
import providerRoutes from "./routes/providers.routes.js"

const app = express() // create express app instance 

// middlewares // Funciones que se ejecutan antes de que lleguen a las rutas
app.use(express.json()) // Para que express entienda los formatos json

app.use(medicineRoutes)
app.use(providerRoutes)


export default app // exportar app para poder importarla en index.js