import { Medicine } from "../models/Medicines.js" // Importamos el modelo de la tabla medicines
import { Provider } from "../models/Providers.js" // Importamos el modelo de la tabla providers
import { Op } from "sequelize" 

export const createMedicine = async (req, res) => {
    try {
        const { name, cost, price, quantity, description, expiration_date, category,presentation, status} = req.body

        const newMedicine = await Medicine.create({
            name,
            cost,
            price,
            quantity,
            description,
            expiration_date,
            category,
            presentation,
            status
        })

        console.log(newMedicine)

        if(!newMedicine){
            return res.status(400).json({
                msg: 'Error creating the medicine',
            })
        }
    return res.status(201).json(newMedicine)
    } catch (error) {
        return res.status(500).json({
            msg: 'Error creating the medicine',
        })
    }
}

export const updateMedicine = async (req,res) => {
    try {
        const _id = req.params.id
        const { ...rest } = req.body
        const medicineUp = await Medicine.findByPk(_id) // Busca el proyecto por el id
        console.log({medicineUp})
        if (!medicineUp) { // Si no existe el medicamento en la base de datos
            return res.status(404).json({
                msg: 'No existe el medicamento',
            })
        }
        await medicineUp.update(rest, { where: { id: _id } }) // Actualiza los datos del medicamento
        const updateMedici = await Medicine.findByPk(_id) // Busca el medicamento actualizado
        return res.status(200).send(updateMedici)
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al actualizar el medicamento',
        })
    }
}



export const getMedicines = async (req, res) => {
    try {
        const { page = 1, perPage = 10 } = req.query;
        const limit = +perPage; // Convierte el string a number
        const offset = (+page - 1) * limit; // Calcula el offset para la paginación

        const medicines = await Medicine.findAll({
            limit,
            offset,
        });

        if (!medicines.length) {
            return res.status(404).json({
                msg: 'No se encontraron medicamentos',
            });
        }

        return res.status(200).send(medicines);
    } catch (error) {
        return res.status(500).json({
            msg: 'Error get all medicines',
        });
    }
};

export const searchMedicines = async (req, res) => {
    try {
        const { page = 1, perPage = 10, q } = req.query;
        const limit = +perPage; // Convierte el string a number
        // * número de filas que se deben omitir "offset" antes de comenzar a devolver filas de la consulta 
        const offset = (+page - 1) * limit; // Calcula el offset para la paginación

        // Si existe el query param q, se crea la condición para la búsqueda
        const condition = q ? { name: { [Op.iLike]: `%${q.toLowerCase()}%` } } : {}; 

        //console.log(condition);

        const medicines = await Medicine.findAll({
            where: condition,
            limit,
            offset,
        });

        if (!medicines.length) {
            return res.status(404).json({
                msg: 'No se encontraron medicamentos',
            });
        }

        return res.status(200).send(medicines);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error al buscar medicamentos',
        });
    }
};


export const deleteMedicine = async (req, res) => {
    try {
        const _id = req.params.id

        const deletedMedicine = await Medicine.update(
            {
            status: false},
            {
                where: { id: _id }
            })

        if(!deletedMedicine){ // Si no existe el medicamento
            return res.status(400).json({
                msg: 'Error when eliminating the medicine',
            })
        }


        const project = await Medicine.findOne( { where : { id : _id } } ) // Busca el proyecto por el id

        return res.status(200).send(project)
        
    } catch (error) {
        return res.status(500).json({
            msg: 'Error when eliminating the medicine',
        })
    }
}
