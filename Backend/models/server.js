"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// to create our API REST
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// routes
const user_routes_1 = __importDefault(require("../routes/user.routes"));
const projects_routes_1 = __importDefault(require("../routes/projects.routes"));
const students_routes_1 = __importDefault(require("../routes/students.routes")); // Importa correctamente
const clubs_routes_1 = __importDefault(require("../routes/clubs.routes"));
const members_routes_1 = __importDefault(require("../routes/members.routes"));
const detalleClubs_routes_1 = __importDefault(require("../routes/detalleClubs.routes"));
const detalleEventos_routes_1 = __importDefault(require("../routes/detalleEventos.routes"));
const detallePagoEvento_routes_1 = __importDefault(require("../routes/detallePagoEventos.routes"));
const detallePagoExterno_routes_1 = __importDefault(require("../routes/detallePagoExternos.routes"));
const detalleProjectos_routes_1 = __importDefault(require("../routes/detalleProjectos.routes"));
const eventos_routes_1 = __importDefault(require("../routes/events.routes"));
const pagosEventos_routes_1 = __importDefault(require("../routes/pagosEventos.routes"));
const pagosExternos_routes_1 = __importDefault(require("../routes/pagosExternos.routes"));
const tareas_routes_1 = __importDefault(require("../routes/tareas.routes"));
const cargos_controller_1 = __importDefault(require("../routes/cargos.routes"))

// creation of tables
const { User, Projects, Clubs, Students, Members, Cargos, DetalleClubs, DetalleEventos, DetallePagoEventos,DetallePagoExterno, DetalleProyectos, Eventos, PagosEventos, PagosExternos, Tareas} = require("./tblAssociation.models");

class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.middlewares();
        this.routes();
        this.dbConnect();
    }
    //@app.listen(): initialize the web server on the specified port 
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Application is running in port ${this.port}`);
        });
    }
    //@routes: configurate routes
    routes() {
        this.app.use('/api/users', user_routes_1.default);
        this.app.use('/api/projects', projects_routes_1.default);
        this.app.use('/api/students', students_routes_1.default);
        this.app.use('/api/clubs', clubs_routes_1.default);
        this.app.use('/api/members', members_routes_1.default);
        this.app.use('/api/detalleClubs', detalleClubs_routes_1.default);
        this.app.use('/api/detalleEventos', detalleEventos_routes_1.default);
        this.app.use('/api/detallePagoEventos', detallePagoEvento_routes_1.default);
        this.app.use('/api/detallePagoExternos', detallePagoExterno_routes_1.default);
        this.app.use('/api/detalleProjectos', detalleProjectos_routes_1.default);
        this.app.use('/api/events', eventos_routes_1.default);
        this.app.use('/api/PagoEventos', pagosEventos_routes_1.default);
        this.app.use('/api/PagoExternos', pagosExternos_routes_1.default);
        this.app.use('/api/tareas', tareas_routes_1.default);
        this.app.use('/api/cargos', cargos_controller_1.default);
    }
    /*@middlewares: check http request from server,
    if body is in json convert data to js object*/
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    /*@dbConnect: Asynchronous function that creates the database based on
    sequel rules*/
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // These lines of code the first time create my tables
                yield User.sync();
                yield Projects.sync();
                yield Students.sync();
                yield Clubs.sync();
                yield Members.sync();
                yield Cargos.sync();
                yield DetalleClubs.sync();
                yield DetalleEventos.sync();
                yield DetallePagoEventos.sync();
                yield DetallePagoExterno.sync();
                yield DetalleProyectos.sync();
                yield Eventos.sync();
                yield PagosEventos.sync();
                yield PagosExternos.sync();
                yield Projects.sync();
                yield Tareas.sync();
            }
            catch (error) {
                console.log('unable to connect to the database:', error);
            }
        });
    }
}

exports.default = Server;
