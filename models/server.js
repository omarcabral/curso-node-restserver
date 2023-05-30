
import  express, { json }  from 'express';
import cors from 'cors';
import { router } from '../routes/usuarios.routes.js';

class Server{
    constructor(){
        this.app=express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath='/api/usuarios';
        //Middlewares
        this.middlewares();
        //Rutas de la aplicacion
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());
        

        //Directorio publico
        this.app.use(express.static('public'))
        
    }
    routes(){
        this.app.use(this.usuariosPath, router);
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`El server esta corriendo en el puerto ${this.port}`);
        });
    }
}

export { Server };
