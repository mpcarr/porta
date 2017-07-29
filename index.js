"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var ionic_angular_1 = require('ionic-angular');
var porta_login_1 = require("./src/login/porta-login");
var porta_providers_1 = require("./src/config/porta.providers");
var porta_login_2 = require('./src/login/porta-login');
exports.PortaLogin = porta_login_2.PortaLogin;
var PortaModule = (function () {
    function PortaModule() {
    }
    PortaModule.forRoot = function (config) {
        return {
            ngModule: PortaModule,
            providers: porta_providers_1.PortaProviders.getProviders(config)
        };
    };
    PortaModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, ionic_angular_1.IonicModule],
            declarations: [porta_login_1.PortaLogin],
            entryComponents: [porta_login_1.PortaLogin],
            exports: []
        })
    ], PortaModule);
    return PortaModule;
}());
exports.PortaModule = PortaModule;
