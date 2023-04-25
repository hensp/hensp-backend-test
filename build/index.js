"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const database_1 = require("./database/database");
const medicine_controller_1 = require("./controllers/medicine-controller");
const admin_1 = require("./middlewares/admin");
const user_controller_1 = require("./controllers/user-controller");
const app = (0, express_1.default)();
const router = express_1.default.Router();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Medicine routes
router.get('/medicines', medicine_controller_1.getAllMedicines);
router.get('/medicines/:id', medicine_controller_1.getMedicineById);
router.post('/medicines', admin_1.isAdmin, medicine_controller_1.createMedicine);
router.put('/medicines/:id', admin_1.isAdmin, medicine_controller_1.updateMedicine);
router.delete('/medicines/:id', admin_1.isAdmin, medicine_controller_1.deleteMedicineById);
// User routes
router.get('/users', admin_1.isAdmin, user_controller_1.getAllUsers);
router.get('/users/:id', admin_1.isAdmin, user_controller_1.getUserById);
router.post('/users', admin_1.isAdmin, user_controller_1.createUser);
router.put('/users/:id', admin_1.isAdmin, user_controller_1.updateUser);
router.delete('/users/:id', admin_1.isAdmin, user_controller_1.deleteUserById);
app.listen(3000, () => {
    console.log('Server running on port 3000');
    database_1.sequelize.authenticate().then(() => {
        console.log('Database connected');
    }).catch((error) => {
        console.log('Error connecting to database: ', error);
    });
});
app.use('/api', router);
//# sourceMappingURL=index.js.map