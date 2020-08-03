import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";

// Rutas
import AuthRoutes from "./routes/Auth.routes";

export class Server {
  private app: express.Application;

  constructor(){
    this.app = express();
    this.config();
    this.middlewares();
    this.routes();
  }

  private config(): void{
    this.app.set("PORT", process.env.PORT || 3000);
  }

  private middlewares(): void {
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(compression());
    this.app.use(cors());
  }

  private routes(): void {
    this.app.use("/api/v1/auth", AuthRoutes);
  }

  public start(): void{
    this.app.listen(this.app.get("PORT"), () => {
      console.log("Service on port", this.app.get("PORT"));
    });
  }
}
