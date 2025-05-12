const express = require('express');
const pool = require('./db');
const app = express();

app.use(express.json());

// Ruta de prueba para obtener usuarios
app.get('/expenses', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.expenses');
    res.json(result.rows);
  } catch (err) {
    console.error('Error al consultar la base de datos:', err);
    res.status(500).json({ error: 'Error al consultar la base de datos' });
  }
});

app.get('/categories', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM categories');
    res.json(result.rows);
  } catch (err) {
    console.error('Error al consultar la base de datos:', err);
    res.status(500).json({ error: 'Error al consultar la base de datos' });
  }
});

// Ruta para crear un nuevo gasto
app.post('/expenses', async (req, res) => {
  const { description, amount } = req.body;

  try {
    const result = await pool.query(
'INSERT INTO public.expenses (description, amount) VALUES ($1, $2) RETURNING *',
      [description, amount]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error al insertar el gasto:', err);
    res.status(500).json({ error: 'Error al insertar el gasto' });
  }
});
app.get('/', async (req, res) => {
    res.send('Bienvenido a la API de gastos');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
