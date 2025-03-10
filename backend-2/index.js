const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Respuesta desde Backend 2');
})

const PORT = 3001;
app.listen(PORT,()=>{
    console.log(`Backend 2 escuchando en http://localhost:${PORT}`)
})