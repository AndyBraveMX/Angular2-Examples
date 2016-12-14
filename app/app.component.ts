import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: 'calculator.component.html',
	styleUrls: [ 'calculator.component.css' ],
	providers: [CalculatorService]
})
export class AppComponent {
	title = 'Mi Calculadora';
	res: string;

	//Inyectamos el servicio, en este caso es solo un metodo el que se esta separando y se pudo invocar el metodo evaluate desde este componente
	//sin embargo para fines demostrativos y de práctica se separa en un servicio
    constructor(private http: Http, private calculatorService: CalculatorService) {}

    	eval(expression:string){
    	//El operador this is necesario para indicar el ambito de la variable que se queire settear
    	//this.res = this.calculatorService.evaluate(expression);

    	this.calculatorService.evaluate(expression).subscribe(
    		result =>{
    			this.res = result;
    		}
    	);
    }

}