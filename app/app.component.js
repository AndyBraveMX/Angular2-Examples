"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var calculator_service_1 = require('./calculator.service');
var AppComponent = (function () {
    //Inyectamos el servicio, en este caso es solo un metodo el que se esta separando y se pudo invocar el metodo evaluate desde este componente
    //sin embargo para fines demostrativos y de práctica se separa en un servicio
    function AppComponent(calculatorService) {
        this.calculatorService = calculatorService;
        this.title = 'Mi Calculadora';
    }
    AppComponent.prototype.eval = function (expression) {
        //El operador this is necesario para indicar el ambito de la variable que se queire settear
        this.res = this.calculatorService.evaluate(expression);
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'calculator.component.html',
            styleUrls: ['calculator.component.css'],
            providers: [calculator_service_1.CalculatorService]
        }), 
        __metadata('design:paramtypes', [calculator_service_1.CalculatorService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map