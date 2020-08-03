import {signIn} from "./SignIn.controller";
import {signUp} from "./SignUp.controller";
import {validate} from "./Validate.controller";

export class Controller{
  getRoute(args: string): any{
    if(args === "signIn"){
      return signIn
    }
    if(args === "signUp"){
      return signUp
    }
    if(args === "validate"){
      return validate
    }
  }
}
