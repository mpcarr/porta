var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import * as _ from 'lodash';
import { Http } from "@angular/http";
import { Injectable, Optional } from "@angular/core";
import { ToastController, LoadingController } from 'ionic-angular';
export var PortaAPIManager = (function () {
    function PortaAPIManager(config, http, toastCtrl, loadingCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        if (config) {
            this.endpoint = config.endpoint;
        }
        else {
            this.endpoint = 'http://localhost:8000/';
        }
    }
    PortaAPIManager.prototype.displayError = function (message) {
        if (message == '0 - ') {
            //unable to make the request.
            var toast = this.toastCtrl.create({
                message: 'Your internet appears to be offline. Data integrity is not guaranteed.',
                position: 'top',
                showCloseButton: true,
                closeButtonText: 'OK',
                cssClass: 'danger'
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: message,
                duration: 3000,
                position: 'top',
                cssClass: 'warning'
            });
            toast.present();
        }
    };
    PortaAPIManager.prototype.showLoading = function () {
        if (_.isUndefined(this.loading)) {
            this.loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            this.loading.present();
        }
    };
    PortaAPIManager.prototype.dismissLoading = function () {
        if (!_.isUndefined(this.loading)) {
            this.loading.dismiss();
            this.loading = undefined;
        }
    };
    PortaAPIManager = __decorate([
        Injectable(),
        __param(0, Optional()), 
        __metadata('design:paramtypes', [Object, Http, ToastController, LoadingController])
    ], PortaAPIManager);
    return PortaAPIManager;
}());
//# sourceMappingURL=api-manager.js.map