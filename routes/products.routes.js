import { Router } from 'express';
import * as productsCtrl from '../controllers/products.controller'
import { verifyToken, isAdmin } from "../middlewares/auth.Jwt"
const router = Router()

router.post('/', [verifyToken, isAdmin], productsCtrl.createProducts);

router.get('/', productsCtrl.getProducts);

router.get('/:id', productsCtrl.getProductsById);

router.put('/:id', [verifyToken, isAdmin], productsCtrl.updateProductById);

router.delete('/:id', [verifyToken, isAdmin], productsCtrl.deleteProductById);

export default router;