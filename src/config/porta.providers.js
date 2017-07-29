"use strict";
var api_manager_config_1 = require("../apiManager/api-manager-config");
var api_manager_1 = require("../apiManager/api-manager");
var secure_storage_1 = require("@ionic-native/secure-storage");
var SecureStorageMock_1 = require("../mocks/SecureStorageMock");
var PortaProviders = (function () {
    function PortaProviders() {
    }
    PortaProviders.getProviders = function (config) {
        var providers;
        if (document.URL.includes('https://') || document.URL.includes('http://')) {
            // Use mock providers
            providers = [
                { provide: api_manager_config_1.PortaAPIManagerConfig, useValue: config },
                api_manager_1.PortaAPIManager,
                { provide: secure_storage_1.SecureStorage, useClass: SecureStorageMock_1.SecureStorageMock }
            ];
        }
        else {
            // Use device providers
            providers = [
                { provide: api_manager_config_1.PortaAPIManagerConfig, useValue: config },
                api_manager_1.PortaAPIManager,
                secure_storage_1.SecureStorage
            ];
        }
        return providers;
    };
    return PortaProviders;
}());
exports.PortaProviders = PortaProviders;
