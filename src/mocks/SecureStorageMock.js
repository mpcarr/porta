var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { SecureStorage, SecureStorageObject } from "@ionic-native/secure-storage";
import { Storage } from '@ionic/storage';
export var SecureStorageMock = (function (_super) {
    __extends(SecureStorageMock, _super);
    function SecureStorageMock() {
        _super.apply(this, arguments);
    }
    SecureStorageMock.prototype.create = function (store) {
        return new Promise(function (resolve, reject) {
            resolve(new SecureStorageObjectMock());
        });
    };
    return SecureStorageMock;
}(SecureStorage));
export var SecureStorageObjectMock = (function (_super) {
    __extends(SecureStorageObjectMock, _super);
    function SecureStorageObjectMock() {
        _super.call(this, {});
        this.localStorage = new Storage({});
    }
    SecureStorageObjectMock.prototype.get = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.localStorage.get(key).then(function (value) {
                resolve(value);
            });
        });
    };
    SecureStorageObjectMock.prototype.set = function (key, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.localStorage.set(key, value);
            resolve(true);
        });
    };
    return SecureStorageObjectMock;
}(SecureStorageObject));
//# sourceMappingURL=SecureStorageMock.js.map