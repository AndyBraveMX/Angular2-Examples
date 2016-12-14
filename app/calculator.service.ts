import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CalculatorService {
  
  constructor(private http: Http){}

  evaluate(exp : string) :Observable<string>{
  	return this.http.get("http://localhost:8080/evaluate?expression=4%2b3")
  		.map((responseData) => {
  			console.log("responseData:" + responseData);				
  			return responseData.json().content;
  		})
		.catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

}