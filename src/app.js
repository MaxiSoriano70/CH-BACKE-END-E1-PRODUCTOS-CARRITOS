import express from "express";
import productosRouter from "./routes/productos.router.js";
import carritosRouter from "./routes/carrito.router.js";

const app = express();
/*Middleware permite parsear el cuerpo de las solicitudes (request body) en formato JSON*/
app.use(express.json());

app.use("/api/productos", productosRouter);
app.use("/api/carritos", carritosRouter);

app.listen(8080, () =>{
    console.log("Servidor iniciado en: http://localhost:8080");
})