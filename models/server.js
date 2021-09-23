const express = require('express');


class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {

        }


        this.middlewares();
        this.routes();
        
    }

    middlewares(){

    }

    routes(){
        
    }

    listen(){
        this.app.listen(process.env.PORT, ()=>{
            console.log(`El servidor se encuentra en el puerto ${this.port}`)
        });
    }
}

module.exports = Server;