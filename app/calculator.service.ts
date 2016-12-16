import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CalculatorService {

	constructor(private http: Http){}

	evaluateRest(exp : string) :Observable<string>{
		let params: URLSearchParams = new URLSearchParams();
		params.set('expression', exp);

		return this.http.get("http://localhost:8080/evaluate", {
		   search: params
		 })
		.map((responseData) => {
			console.log("responseData:" + responseData);				
			return responseData.json().content;
		})
		.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	evaluate(expression:string):string{
 		return eval(expression);
 	}

}