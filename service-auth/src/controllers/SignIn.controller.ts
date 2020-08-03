import {Request, Response} from "express";
import {IControllManage} from "../libs/interfaces/IControllManage";
import UserModel, {IUser} from "../model/Users.model";
import jwt from "jsonwebtoken";
import {signInValidate} from "../libs/Lib.validate";

type typeDataReq = {
  email: string;
  password: string;
}
type typeResponse = {
  error: boolean;
  msg: string;
  token: string;
}

class SignInController implements IControllManage{
  async action(req: Request, res: Response): Promise<Response | any>{
    // Comrpobar si los datos recividos son correctos
    const {error} = signInValidate(req.body)
    if (error){
      const response: typeResponse = {
	error: true,
	msg: "Los datos ingresados incorrecto",
	token: ""
      }
      res.status(400).json(response);
    }

    const dataReq: typeDataReq = req.body
    
    const user: IUser | null = await UserModel.findOne({email: dataReq.email});

    if(user){
      const token: string = jwt.sign({_id: user._id}, process.env.APP_TOKEN || "", {
	expiresIn: 60 * 60 * 24
      });
      const response: typeResponse = {
	error: false,
	msg: "Inicio de sesion exitosa",
	token: token
      }
      res.status(200).json(response);
    } else {
      const response: typeResponse = {
	error: true,
	msg: "Upss! Este usuario no esta registrado",
	token: ""
      }
    }
  }
}

export const signIn: SignInController = new SignInController();
