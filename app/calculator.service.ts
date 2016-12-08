import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class CalculatorService {
  
  //constructor(private http: Http) {}
 	evaluate(expression:string):string{
		return eval(expression);
	}
}