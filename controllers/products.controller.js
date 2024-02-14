import {Products} from '../models/products.model';

export const createProducts = async (req, res) => {
    const {medicamento, proveedor, costo, precio_de_venta} = req.body;
    
    try {
        const newProducts = await Products.create({
            medicamento,
            proveedor,
            costo,
            precio_de_venta
        })
    
        res.status(201).json(newProducts);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const getProducts = async (req, res) => {
    try {
        const products = await Products.findAll()
        res.json(products);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const getProductsById = async (req, res) => {
    try {
        const { id } = req.params
        const products = await Products.findOne({
            where: {
                id
            },
        });
        res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const {medicamento, proveedor, costo, precio_de_venta} = req.body;

        const products = await Products.findByPk(id)
        products.medicamento = medicamento;
        products.proveedor = proveedor;
        products.costo = costo;
        products.precio_de_venta = precio_de_venta;

        await products.save()

        res.status(204).json({message: 'Producto editado'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const deleteProductById = async (req, res) => {
try {
    const { id } = req.params
    await Products.destroy({
        where: {
            id, 
        },
    })

    res.status(204).json()
} catch (error) {
    return res.status(500).json({message: error.message});
}
}