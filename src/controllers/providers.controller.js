import { Provider } from "../models/Providers.js" // Importamos el modelo de 

export const createProvider = async (req, res) => {
    try {
        const { name, address, phone} = req.body

        const newProvider = await Provider.create({
            name,
            address,
            phone
        })

        console.log(newProvider)

        if(!newProvider){
            return res.status(400).json({
                msg: 'Error creating the provider',
            })
        }
    return res.status(201).json(newProvider)
    } catch (error) {
        return res.status(500).json({
            msg: 'Error creating the provider',
        })
    }
}

export const updateProvider = async (req,res) => {
    try {
        const _id = req.params.id
        const { ...rest } = req.body
        const providerUp = await Provider.findByPk(_id) // Busca el proyecto por el id
        console.log({providerUp})
        if (!providerUp) { // Si no existe el medicamento en la base de datos
            return res.status(404).json({
                msg: 'No existe el medicamento',
            })
        }
        await providerUp.update(rest, { where: { id: _id } }) // Actualiza los datos del medicamento
        const updateProvider = await Provider.findByPk(_id) // Busca el medicamento actualizado
        return res.status(200).send(updateProvider)
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al actualizar el medicamento',
        })
    }
}



export const getProviders = async (req, res) => {
    try {
        const { page = 1, perPage = 10 } = req.query;
        const limit = +perPage; // Convierte el string a number
        const offset = (+page - 1) * limit; // Calcula el offset para la paginación

        const medicines = await Provider.findAll({
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
        const limit = +perPage;
        const offset = (+page - 1) * limit;
        const condition = q ? { name: { [Op.iLike]: `%${q}%` } } : {};

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
        return res.status(500).json({
            msg: 'Error al buscar medicamentos',
        });
    }
};


export const deleteProvider = async (req, res) => {
    try {
        const _id = req.params.id

        const deletedProvider = await Provider.update(
            {
            status: false},
            {
                where: { id: _id }
            })

        if(!deletedProvider){ // Si no existe el medicamento
            return res.status(400).json({
                msg: 'Error when eliminating the medicine',
            })
        }
        const project = await Provider.findOne( { where : { id : _id } } ) // Busca el proyecto por el id
        return res.status(200).send(project)
        
    } catch (error) {
        return res.status(500).json({
            msg: 'Error when eliminating the medicine',
        })
    }
}
