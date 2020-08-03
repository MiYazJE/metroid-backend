import {Request, Response} from "express";

export interface IControllManage{
  action(req: Request, res: Response): any;
}
