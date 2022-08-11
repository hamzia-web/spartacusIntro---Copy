"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'spartacusIntro';
        this.image = "assets/images/favicon.ico";
        this.isShown = false; // hidden by default
        console.log(" AppComponent Constructor");
    }
    AppComponent.prototype.showOutlet = function () {
        console.log("Show outlet");
    };
    AppComponent.prototype.hideOutlet = function () {
        console.log("Hide outlet");
    };
    AppComponent.prototype.toggleShow = function () {
        console.log("Type of isShown variable:" + typeof (this.isShown));
        this.isShown = !this.isShown;
    };
    AppComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
