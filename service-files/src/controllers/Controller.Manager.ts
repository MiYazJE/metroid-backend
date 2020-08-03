import {selectFile} from "./SelectFile.controller";

export class Controller {
  getRoute(args: string): any{
    if(args === "selectFiles"){
      return selectFile;
    }
  }
}
