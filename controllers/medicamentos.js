import { validateMedicamento, validatePartialMedicamento } from '../schemas/medicamentos.js'

export class MedicamentoController {
  constructor({ medicamentoModel }) {
    this.medicamentoModel = medicamentoModel
  }
  // Extrayendo medicamentos

  getAll = async (req, res) => {
    const { input } = req.query
    const medicamento = await this.medicamentoModel.getAll({ input })
    res.json(medicamento)
  }

  // create medicamento

  createMedicamento = async (req, res) => {
    const result = validateMedicamento(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newMedicamento = await this.medicamentoModel.createMedicamento({ input: result.data })
    res.status(200).json(newMedicamento)
  }

  // update medicamento

  updateMedicamento = async (req, res) => {
    const result = validatePartialMedicamento(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const updateMedicamento = await this.medicamentoModel.updateMedicamento({ id, input: result.data })

    return res.json(updateMedicamento)
  }

  // delete Medicamento
  deleteMedicamento = async (req, res) => {
    const { id } = req.params

    const result = await this.medicamentoModel.deleteMedicamento({ id })

    if (result === false) {
      return res.status(404).json({ message: 'Medicamento not found' })
    }

    return res.json({ message: 'Medicamento deleted' })
  }
}
