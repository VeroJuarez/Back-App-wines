const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Obtener todos los productos
router.get('/', (req, res) => {
    db.query('SELECT * FROM productos', (err, results) => {
        if (err) res.status(500).json({ error: err });
        res.json(results);
    });
});

// Agregar un producto
router.post('/', (req, res) => {
    const { nombre, precio, stock, tipo, imagen } = req.body;
    const query = 'INSERT INTO productos (nombre, precio, stock, tipo, imagen) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [nombre, precio, stock, tipo, imagen], (err, result) => {
        if (err) {
            console.error('Error al insertar el producto:',err);
            return res.status(500).json({ error: 'Error al insertar el producto' });
        }
        res.json({ id: result.insertId, nombre, precio, stock, tipo, imagen });
    });
});

// Actualizar un producto
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, precio, stock, tipo, imagen } = req.body;
    const query = 'UPDATE productos SET nombre = ?, precio = ?, stock = ?, tipo = ?, imagen = ? WHERE id = ?';
    db.query(query, [nombre, precio, stock, tipo, imagen, id], (err) => {
        if (err) res.status(500).json({ error: err });
        res.send('Producto actualizado');
    });
});

// Eliminar un producto
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM productos WHERE id = ?', [id], (err) => {
        if (err) res.status(500).json({ error: err });
        res.send('Producto eliminado');
    });
});

module.exports = router;

