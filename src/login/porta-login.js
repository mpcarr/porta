var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PortaAPIManager } from "../apiManager/api-manager";
import { SecureStorage } from '@ionic-native/secure-storage';
export var PortaLogin = (function () {
    function PortaLogin(navCtrl, portaAPIManager, secureStorage) {
        this.navCtrl = navCtrl;
        this.portaAPIManager = portaAPIManager;
        this.secureStorage = secureStorage;
    }
    PortaLogin.prototype.createSecureStore = function () {
        this.secureStorage.create('porta')
            .then(function (storage) {
            console.log('secure storage created');
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    PortaLogin = __decorate([
        Component({
            selector: 'porta-login',
            template: '<ion-header>' +
                '<ion-navbar>' +
                '<ion-title>Porta Login</ion-title>' +
                '</ion-navbar>' +
                '</ion-header>' +
                '<ion-content>' +
                '<button ion-button (click)="createSecureStore()"></button>' +
                '</ion-content>'
        }), 
        __metadata('design:paramtypes', [NavController, PortaAPIManager, SecureStorage])
    ], PortaLogin);
    return PortaLogin;
}());
//# sourceMappingURL=porta-login.js.map