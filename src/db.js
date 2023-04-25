import { createPool } from "mysql2/promise";

//conexion  a bases de datos
export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "126440",
  port: 3306,
  database: "farmacia",
});
