import app from "./app.js"
import { sequelize } from "./database/database.js"

import './models/Providers.js' // Import all models
import './models/Medicines.js' // Import all models



async function main() {
    try {
      // await sequelize.authenticate() // Test connection
      // console.log("Database connected") // If connection is OK, show message
      await sequelize.sync( {force:false} ) // Create tables if they don't exist
      app.listen(3000, () => {
        console.log("Server is listening on port 3000")
      })
    } catch (error) {
      console.error('Unable to connect to the database',error)
    }
  }
  
  main()