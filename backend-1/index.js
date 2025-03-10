const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Respuesta desde Backend 1');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Backend 1 escuchando en http://localhost:${PORT}`);
});
