import { Router } from "express"
import {createMedicine, getMedicines,deleteMedicine,updateMedicine,searchMedicines,getMedicineProvider} from "../controllers/medicines.controller.js"
import { check } from 'express-validator'
import { validationFields } from '../middlewares/validate-fields.js'

const router = Router()

router.post('/medications', createMedicine)

router.get('/medications', getMedicines)

router.get('/medications/search', searchMedicines);


router.delete('/medications/:id', [
    check('id', 'Not a valid id').isInt(),
], 
validationFields,
deleteMedicine)

router.put('/medications/:id', [
    check('id', 'Not a valid id').isInt(),
], validationFields,
updateMedicine)

router.get('/medications/:id/providers', [
    check('id', 'No es un id valido').isInt(),
], validationFields,
getMedicineProvider)



export default router