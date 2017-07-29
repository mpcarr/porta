"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _ = require('lodash');
var core_1 = require("@angular/core");
var access_1 = require("./routes/access");
var PortaAPIManager = (function () {
    function PortaAPIManager(http, toastCtrl, loadingCtrl, config) {
        var _this = this;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.config = config;
        if (config) {
            this.endpoint = config.endpoint;
        }
        else {
            this.endpoint = 'http://localhost:8000/';
        }
        console.log('porta endpoint set to:' + this.endpoint);
        this.access = new access_1.PortaAPIRouteAccess(http, this.endpoint);
        this.access.errorItem$.subscribe(function (err) {
            if (!err.options || (err.options && (_.isUndefined(err.options.toast) || err.options.toast))) {
                _this.displayError(err.message);
            }
        });
        this.access.loading$.subscribe(function (loading) {
            if (loading.dismiss) {
                _this.dismissLoading();
            }
            else if (!loading.options || (loading.options && (_.isUndefined(loading.options.loading) || loading.options.loading))) {
                _this.showLoading();
            }
        });
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
        core_1.Injectable()
    ], PortaAPIManager);
    return PortaAPIManager;
}());
exports.PortaAPIManager = PortaAPIManager;
