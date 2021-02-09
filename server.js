/* importando o express */
const express = require("express");
/* colocando o express dentro da variável app */
const app = express();
/* importando os dados de data.json */
const data = require("./data.json");
/* utlizando o formato dos dados em json */
app.use(express.json());
/* rota para mostrar todos os clients */
app.get("/clients", (req,res) => {
  res.json(data);
});
/* rota para filtrar um client pelo id */
app.get("/clients/:id", (req,res) => {
  const { id } = req.params;
  const client = data.find(cli => cli.id == id);

  if (!client) return res.status(204).json();

  res.json(client);
});
/* rota para cadastrar um client */
app.post("/clients", (req,res) => {
  const { name, email } = req.body;

  res.json({ name, email });
});
/* rota para alterar um dado do client */
app.put("/clients/:id", (req,res) => {
const { id } = req.params;
const client = data.find(cli => cli.id == id);

if(!client) return res.status(204).json();

const { name } = req.body;

client.name = name;

res.json(client);

});
/* rota para deletar um client */
app.delete("/clients/:id", (req,res) => {
  const { id } = req.params;
  const clientsFiltered = data.filter(client => client.id != id);

  res.json(clientsFiltered);
});
/* Porta de comunicação */
app.listen(3000, () => {
    console.log("Server is running");
});