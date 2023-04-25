import { pool } from "../db.js"; //MODULO CREADO E IMPORTADO PARA CONECCION DE DB, se colocan 2 puntos porque sube de nivel ya que pool esta en src
export const ping = async (req, res) => {
  const [resultado] = await pool.query("SELECT 'pong' AS result");
  res.json(resultado[0]);
};
