/*const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const port = 3000;

// Inicia el servidor
app.listen(port, () => {
console.log("Servidor corriendo en el puerto " + port);
});

// Endpoint para obtener todos los vuelos de la API
app.get("/api/vuelos", async (req, res) => {
try {
    const response = await axios.get("https://opensky-network.org/api/states/all");
    res.json(response.data);
} catch (error) {
    console.error("Error al realizar la solicitud a la API:", error);
    res.status(500).send("Error al obtener los datos de los vuelos");
}
});

// Endpoint para filtrar vuelos por país
app.get("/api/vuelos-por-pais", async (req, res) => {
const pais = req.query.pais;
if (!pais) return res.status(400).send("Debes proporcionar un parámetro 'pais' para filtrar los vuelos.");

try {
    const response = await axios.get("https://opensky-network.org/api/states/all");
    const vuelos = response.data.states.filter(v => {
    const paisOrigen = v[2];
    const paisDestino = v[3];
    return paisOrigen === pais || paisDestino === pais;
    });
    res.json(vuelos);
} catch (error) {
    console.error("Error al realizar la solicitud a la API:", error);
    res.status(500).send("Error al obtener los datos de los vuelos");
}
});*/

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // Middleware para parsear JSON

// Mock data para los productos
const products = [
    { id: 1, name: 'celular', price: 1300, available: true },
    { id: 2, name: 'Camara', price: 400, available: false },
    { id: 3, name: 'audifonos', price: 60, available: true }
];

// Ruta para consultar todos los productos
app.get("/products", (req, res) => {
    console.log('GET /products');
    res.json(products);
});

// Ruta para consultar un producto específico por ID
app.get("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    console.log(`GET /products/${productId}`);
    const product = products.find(p => p.id === productId);
    
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Producto no encontrado');
    }
});

// Ruta para validar la disponibilidad de un producto por ID
app.get("/products/:id/availability", (req, res) => {
    const productId = parseInt(req.params.id);
    console.log(`GET /products/${productId}/availability`);
    const product = products.find(p => p.id === productId);
    
    if (product) {
        res.json({ available: product.available });
    } else {
        res.status(404).send('Producto no encontrado');
    }
});

// Ruta para validar el precio de un producto por ID
app.get("/products/:id/price", (req, res) => {
    const productId = parseInt(req.params.id);
    console.log(`GET /products/${productId}/price`);
    const product = products.find(p => p.id === productId);
    
    if (product) {
        res.json({ price: product.price });
    } else {
        res.status(404).send('Producto no encontrado');
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});



