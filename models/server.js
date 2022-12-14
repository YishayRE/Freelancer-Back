import express, { json, static as estatic } from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { createServer } from 'http';

import * as routes from '../routes/index.js';
import dbConnection from '../database/config.js';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = createServer(this.app);

        this.paths = {
            categoriaEmpleo: '/api/categoriaEmpleo',
            conversacion: '/api/conversacion',
            empleador: '/api/empleador',
            example: '/api/example',
            freelancer: '/api/freelancer',
            freelancerCategoria: '/api/freelancerCategoria',
            freelancerHabilidad: '/api/freelancerHabilidad',
            proyecto: '/api/proyecto',
            proyectoCategoria: '/api/proyectoCategoria',
            proyectoHabilidad: '/api/proyectoHabilidad',
            usuario: '/api/usuario'
        }

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        // Tareas programadas
        this.crons();
    }

    async conectarDB() {
        //Function from /database/config.js
        await dbConnection.dbConnection();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(json());

        // Directorio Público
        this.app.use(estatic('public'));

        // Fileupload - Carga de archivos
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }));
    }

    routes() {
        this.app.use(this.paths.categoriaEmpleo, routes.categoriaEmpleos);
        this.app.use(this.paths.conversacion, routes.conversaciones);
        this.app.use(this.paths.empleador, routes.empleadores);
        this.app.use(this.paths.example, routes.examples);
        this.app.use(this.paths.freelancerCategoria, routes.freelancerCategorias);
        this.app.use(this.paths.freelancerHabilidad, routes.freelancerHabilidades);
        this.app.use(this.paths.freelancer, routes.freelancers);
        this.app.use(this.paths.proyectoCategoria, routes.proyectoCategorias);
        this.app.use(this.paths.proyectoHabilidad, routes.proyectoHabilidades);
        this.app.use(this.paths.proyecto, routes.proyectos);
        this.app.use(this.paths.usuario, routes.usuarios);
    }

    crons() {
        //rutinas programadas
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

export default Server;