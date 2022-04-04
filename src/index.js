const express = require("express");
const routes = require("./routes");
const app = express();
app.use(express.json());
app.use(routes);

let server = app.listen(process.env.PORT || 4000, async () => {
  console.log(`Servidor rodando na porta ${server.address().port}`);
});
