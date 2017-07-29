"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rxjs_1 = require("rxjs");
var mcc_api_service_1 = require('mcc-api/src/services/mcc-api.service');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var PortaAPIRouteAccess = (function (_super) {
    __extends(PortaAPIRouteAccess, _super);
    function PortaAPIRouteAccess(http, endpoint) {
        var _this = this;
        _super.call(this);
        this.http = http;
        this._errorSource = new BehaviorSubject_1.BehaviorSubject({ message: '', options: {} });
        this._loadingSource = new BehaviorSubject_1.BehaviorSubject({ dismiss: true });
        // Observable navItem stream
        this.errorItem$ = this._errorSource.asObservable();
        this.loading$ = this._loadingSource.asObservable();
        this.error = function (err, observer, opts) {
            _this._loadingSource.next({ dismiss: true });
            observer.error();
            _this._errorSource.next({ message: err, options: opts });
        };
        this.endpoint = endpoint;
    }
    PortaAPIRouteAccess.prototype.login = function (opts) {
        var _this = this;
        this._loadingSource.next({ options: opts });
        return new rxjs_1.Observable(function (observer) {
            _this.post('/', {}).subscribe(function (res) {
                _this._loadingSource.next({ dismiss: true });
                observer.next();
                observer.complete();
            }, function (err) { _this.error(err, observer, opts); });
        });
    };
    return PortaAPIRouteAccess;
}(mcc_api_service_1.MCCApiService));
exports.PortaAPIRouteAccess = PortaAPIRouteAccess;
