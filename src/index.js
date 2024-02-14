import app from './app';
import {sequelize} from '../database/database';
//import '../models/products.model';
//import '../models/user.model';

async function main() {
    try {
        await sequelize.sync({force: false});
        console.log("Connection has been established successfully.");
        app.listen(3000);
        console.log('Server is listening on port 3000');
    } catch (error) {
        console.error("Unable to connect to the database: ", error);
    }
}

main();