import express from "express";
 
const app = express();
const PORT = 3001;
 
const capitais: Record<string, string> = {
  SP: "São Paulo",
RJ: "Rio de Janeiro",
MG: "Belo Horizonte",
xx: "Erro 404",
};
 
app.get("/estados/:sigla", (req, res) => {
  const sigla = req.params.sigla.toUpperCase();
  const capital = capitais[sigla];
 
  if (!capital) {
    return res.status(404).json({ erro: "Estado não encontrado" });
  }
 
  return res.status(200).json({sigla, capital});
});
 
app.listen(PORT, () => {
  console.log(`Servidor executando em http://localhost:${PORT}`);
});