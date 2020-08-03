import {Request, Response} from "express";
import {IControllManage} from "../libs/interfaces/IControllers";

class SelectFile implements IControllManage{
  async action(req: Request, res: Response): Promise<Response | any>{
    res.status(200).send({msg: "Select File"});
  }
}

export const selectFile: SelectFile = new SelectFile();
