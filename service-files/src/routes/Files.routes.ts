import {Router} from "express";
import {Controller} from "../controllers/Controller.Manager";
import {IControllManage} from "../libs/interfaces/IControllers";

class FilesRoutes {
  public router: Router;
  private controller: Controller;

  constructor(){
    this.router = Router();
    // Instancio la clase controlladora
    this.controller = new Controller();
    this.routes();
  }

  private routes(): void {
    this.router.post("/selectFiles", this.selectFiles().action);
  }

  private selectFiles(): IControllManage {
    const route: IControllManage = this.controller.getRoute("selectFiles");
    return route
  }
}

const fileRoutes: FilesRoutes = new FilesRoutes();
export default fileRoutes.router;
