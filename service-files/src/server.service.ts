import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import bodyParser from "body-parser";
import cors from "cors";

export class Server{
  private app: express.Application

  constructor(){
    this.app = express();
    this.config();
    this.middlewares();
    this.routes();
  }

  private config(): void {
    this.app.set("PORT", process.env.PORT || 3000);
  }

  private middlewares(): void {
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.use(compression());
    this.app.use(morgan("dev"));
    this.app.use(cors());
  }

  private routes(): void {

  }

  public start(): void {
    this.app.listen(this.app.get("PORT"), () => {
      console.log("Server on port", this.app.get("PORT"));
    });
  }
}
