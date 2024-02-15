import { createApp } from './app.js'
import { UserModel } from './models/users.js'
import { MedicamentoModel } from './models/medicamento.js'

createApp({ userModel: UserModel, medicamentoModel: MedicamentoModel })
