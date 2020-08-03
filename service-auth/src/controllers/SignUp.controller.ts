// Librerias NodeJS
import {Request, Response} from "express";
// Librerias Propias
import {IControllManage} from "../libs/interfaces/IControllManage";
import UserModel, {IUser} from "../model/Users.model";
import {signUpValidation} from "../libs/Lib.validate";

type typeDataReq = {
  email: string;
  password: string;
  username: string;
}

type typeResponse = {
  error: boolean;
  msg: string;
}

export class SignUp implements IControllManage{
  async action(req: Request, res: Response): Promise<Response | any>{
    // Comrpobar si los datos recividos son correctos
    const {error} = signUpValidation(req.body)
    if (error){
      const response: typeResponse = {
	error: true,
	msg: "Los datos ingresados incorrecto"
      }
      res.status(400).json(response);
    }

    const dataReq: typeDataReq = req.body;

    const user: IUser| null = await UserModel.findOne({email: dataReq.email})

    if(!user){
      const newUser: IUser = new UserModel({
	email: dataReq.email,
	password: dataReq.password,
	username: dataReq.username
      });

      // Encriptar password
      newUser.password = await newUser.encryptPassword(newUser.password);

      const saveUser = await newUser.save();

      if(saveUser){
	const response: typeResponse = {
	  error: false,
	  msg: "Se registro el usuario correctamente"
	}
	res.status(200).json(response)
      } else {
	const response: typeResponse = {
	  error: true,
	  msg: "No se registro el usuario correctamente"
	}
	res.status(400).json(response);
      }
    } else {
      const response: typeResponse = {
	error: true,
	msg: "Upss! ya se existe un usuario con este Email"
      }
      res.status(400).json(response);
    }
  }
}

export const signUp: SignUp = new SignUp();
