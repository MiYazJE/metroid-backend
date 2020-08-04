import dotenv from 'dotenv';
import { Server } from './server.service';
import { Database } from './config/Config.database.js';

class Main {
    private server: Server;
    private database: Database;

    constructor() {
        dotenv.config();

        this.server = new Server();
        this.database = new Database();

        this.start();
    }

    private start(): void {
        this.database.connect();
        this.server.start()
    }

}

new Main();