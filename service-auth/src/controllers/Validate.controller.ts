import {Request, Response} from "express";
import jwt from "jsonwebtoken";
import {IControllManage} from "../libs/interfaces/IControllManage";

type typeResponse = {
  error: boolean;
  msg: string;
  _id: string | null;
}

interface IPayload{
  _id: string;
  iat: number;
}

export class Validate implements IControllManage{
  action(req: Request, res: Response): Response | any{
    try{
      const token: string | undefined = req.header("token");

      if(!token) {
	const response: typeResponse = {
	  error: true,
	  msg: "Acceso denegado",
	  _id: null
	}
	res.status(400).json(response);
      }

      const payload = jwt.verify(token || "", process.env.APP_TOKEN || "") as IPayload;

      const response: typeResponse = {
	error: false,
	msg: "Acceso permitido",
	_id: payload._id
      }
      res.status(200).json(response);

    } catch (e){
      console.error(e);
      const response: typeResponse = {
	error: true,
	msg: "Acceso denegado",
	_id: null
      }
      res.status(400).json(response);
    }
  }
}

export const validate: Validate = new Validate();
