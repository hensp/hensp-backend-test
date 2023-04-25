import { pool } from "../db.js";

export const getMedicamento = async (req, res) => {
  const [rows] = await pool.query("SELECT *FROM medicamentos");
  res.json({ rows });
};

export const createMedicamento = async (req, res) => {
  const { nombre, proveedor, precio } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO medicamentos (nombre, proveedor, precio) VALUES (?, ?, ?)",
    [nombre, proveedor, precio]
  );
  res.send({
    id: rows.insertId,
    nombre,
    proveedor,
    precio,
  });
};

export const updateMedicamento = async (req, res) => {
  const { id } = req.params;
  const { nombre, proveedor, precio } = req.body;

  const [result] = await pool.query(
    "UPDATE medicamentos  SET nombre  = IFNULL(?,nombre ) , proveedor = IFNULL(?, proveedor), precio = IFNULL(?,PRECIO) WHERE id = ?",
    [nombre, proveedor, precio, id]
  );
  console.log(result);

  if (result.affectedRows === 0)
    return res.status(404).json({
      message: "medicamento no encontrado",
    });

  const [rows] = await pool.query("SELECT * FROM medicamentos WHERE id = ?", [
    id,
  ]);

  res.json(rows[0]);
};

//delete
export const deleteMedicamento = async (req, res) => {
  const [result] = await pool.query("DELETE FROM medicamentos WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows <= 0)
    return res.status(400).json({ message: "medicamento no encontrado" });

  res.sendStatus(204);
};
