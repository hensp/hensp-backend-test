import { Router } from "express"
import {createProvider, getProviders,deleteProvider,updateProvider,searchMedicines} from "../controllers/providers.controller.js"
import { check } from 'express-validator'
import { validationFields } from '../middlewares/validate-fields.js'

const router = Router()

router.post('/providers', createProvider)

router.get('/providers', getProviders)

router.get('/providers/search', searchMedicines);


router.delete('/providers/:id', [
    check('id', 'Not a valid id').isInt(),
], 
validationFields,
deleteProvider)

router.put('/providers/:id', [
    check('id', 'Not a valid id').isInt(),
], validationFields,
updateProvider)




export default router