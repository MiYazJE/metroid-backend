import dotenv from "dotenv";
import {Server} from "./server.service";
import {Database} from "./config/Config.database";

class Main{
  private server: Server;
  private database: Database;

  constructor(){
    dotenv.config();

    // Instanciar clases
    this.server = new Server();
    this.database = new Database();

    // Iniciar servicio
    this.start();
  }

  private start(): void{
    this.database.connected();
    this.server.start();
  }
}

// Iniciar clases
new Main();
