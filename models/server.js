const express = require('express');
const cors = require('cors');
const db = require('./../db/connection');


class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            products: '/products',
        }

        this.dbConnection();
        this.middlewares();
        this.routes();
        
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.paths.products, require('./../routes/products')); 
    }

    async dbConnection(){
        try {
            // await db.authenticate();
            await db.sync();
            console.log('La base de datos esta online');
        } catch (error) {
            console.log('La conexión no se ha podido realizar');
            throw new Error(error);
        }
    }

    listen(){
        this.app.listen(process.env.PORT, ()=>{
            console.log(`El servidor se encuentra en el puerto ${this.port}`)
        });
    }
}

module.exports = Server;