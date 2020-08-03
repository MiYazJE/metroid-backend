import dotenv from "dotenv";
import {Server} from "./server.service";
import {Database} from "./config/Config.database";

class Main{
  private server: Server;
  private database: Database;

  constructor(){
    // Iniciar variables de entorno
    dotenv.config();

    // Instanciar clase
    this.server = new Server();
    this.database = new Database();

    // Iniciar servicio
    this.start();
  }

  private start(): void {
    // Conectar a la base de datos
    this.database.connected();
    // Iniciar servidor
    this.server.start();
  }
}

new Main();
