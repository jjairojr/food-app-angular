import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

export class ErrorHandler {
  static handleError(error: Response | any) {
    let errorMessage: string;
    if(error instanceof Response) {
      errorMessage = `Error ${error.status} to access the ${error.url} - ${error.statusText}`
      console.log(errorMessage);
    }else {
      errorMessage = error.toString();
    }
    return Observable.throw(errorMessage)
  }
}
