const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Servir arquivos estáticos, como HTML, CSS, JS
app.use(express.static('public'));

// Rota para página inicial
app.get('/', (req, res) => {
  res.sender('../app/view/home');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
