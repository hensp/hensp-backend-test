
import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { sequelize } from './database/database';
import Medicine from './models/medicine';
import { createMedicine, deleteMedicineById, getAllMedicines, getMedicineById, updateMedicine } from './controllers/medicine-controller';
import { isAdmin } from './middlewares/admin';
import { createUser, deleteUserById, getAllUsers, getUserById, updateUser } from './controllers/user-controller';
import { createSupplier, getAllSuppliers, getSupplierById } from './controllers/supplier-controller';

const app = express();
const router = express.Router();


app.use(cors());
app.use(bodyParser.json());


// Medicine routes
router.get('/medicines', getAllMedicines);
router.get('/medicines/:id', getMedicineById);
router.post('/medicines', isAdmin, createMedicine);
router.put('/medicines/:id', isAdmin, updateMedicine);
router.delete('/medicines/:id', isAdmin, deleteMedicineById);

// User routes
router.get('/users', isAdmin, getAllUsers);
router.get('/users/:id', isAdmin, getUserById);
router.post('/users', isAdmin, createUser);
router.put('/users/:id', isAdmin, updateUser);
router.delete('/users', isAdmin, deleteUserById);

// Supplier routes
router.get('/suppliers', getAllSuppliers);
router.get('/suppliers/:id', getSupplierById);
router.post('/suppliers', isAdmin, createSupplier);
router.put('/suppliers/:id', isAdmin, updateMedicine);
router.delete('/suppliers/:id', isAdmin, deleteMedicineById);


app.listen(3000, () => {
    console.log('Server running on port 3000');
    sequelize.authenticate().then(() => {
        console.log('Database connected');
    }).catch((error) => {
        console.log('Error connecting to database: ', error);
    });
});

app.use('/api', router);

