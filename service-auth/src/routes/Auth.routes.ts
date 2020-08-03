import { Router } from "express";
import { Controller } from "../controllers/Controll.Manage";
import {IControllManage} from "../libs/interfaces/IControllManage";

export class AuthRoutes {
  public router: Router;
  private controller: Controller;

  constructor() {
    this.router = Router();
    this.controller = new Controller();
    this.routes();
  }

  private routes(): void{
    this.router.post("/signIn", this.signIn().action);
    this.router.post("/signUp", this.signUp().action);
    this.router.post("/validate", this.validate().action);
  }

  private signIn(): IControllManage {
    const signIn: IControllManage = this.controller.getRoute("signIn");
    return signIn
  }

  private signUp(): IControllManage {
    const signUp: IControllManage = this.controller.getRoute("signUp");
    return signUp
  }

  private validate(): IControllManage {
    const validate: IControllManage = this.controller.getRoute("validate");
    return validate
  }
}

const authRoutes: AuthRoutes = new AuthRoutes();
export default authRoutes.router;
