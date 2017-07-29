import { PortaAPIManagerConfig } from "../apiManager/api-manager-config";
import { PortaAPIManager } from "../apiManager/api-manager";
import { SecureStorage } from "@ionic-native/secure-storage";
import { SecureStorageMock } from "../mocks/SecureStorageMock";
export var PortaProviders = (function () {
    function PortaProviders() {
    }
    PortaProviders.getProviders = function (config) {
        var providers;
        if (document.URL.includes('https://') || document.URL.includes('http://')) {
            // Use mock providers
            providers = [
                { provide: PortaAPIManagerConfig, useValue: config },
                PortaAPIManager,
                { provide: SecureStorage, useClass: SecureStorageMock }
            ];
        }
        else {
            // Use device providers
            providers = [
                { provide: PortaAPIManagerConfig, useValue: config },
                PortaAPIManager,
                SecureStorage
            ];
        }
        return providers;
    };
    return PortaProviders;
}());
//# sourceMappingURL=porta.providers.js.map