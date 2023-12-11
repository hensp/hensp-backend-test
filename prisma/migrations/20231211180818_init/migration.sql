-- CreateTable
CREATE TABLE "Medicamentos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "proveedor" TEXT NOT NULL,
    "costo" DECIMAL NOT NULL,
    "precioventa" DECIMAL NOT NULL
);
