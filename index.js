var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { PortaLogin } from "./src/login/porta-login";
import { PortaAPIManager } from "./src/apiManager/api-manager";
import { PortaAPIManagerConfig } from "./src/apiManager/api-manager-config";
export { PortaLogin } from './src/login/porta-login';
export var PortaModule = (function () {
    function PortaModule() {
    }
    PortaModule.forRoot = function (config) {
        var apiconfig = new PortaAPIManagerConfig();
        apiconfig.endpoint = config.endpoint;
        return {
            ngModule: PortaModule,
            providers: [
                PortaEndpointConfig,
                PortaAPIManager
            ]
        };
    };
    PortaModule = __decorate([
        NgModule({
            imports: [CommonModule, IonicModule],
            declarations: [PortaLogin],
            entryComponents: [PortaLogin],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], PortaModule);
    return PortaModule;
}());
//# sourceMappingURL=index.js.map