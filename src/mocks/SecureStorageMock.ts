import {SecureStorage, SecureStorageObject} from "@ionic-native/secure-storage";
import { Storage } from '@ionic/storage';

export class SecureStorageMock extends SecureStorage {

    create(store: string) {
        return new Promise((resolve, reject) => {
            resolve(new SecureStorageObjectMock());
        })
    }
}

export class SecureStorageObjectMock extends SecureStorageObject{

    localStorage: Storage;

    constructor(){
        super({});
        this.localStorage = new Storage({});
    }

    get(key: string){
        return new Promise((resolve, reject) => {
            this.localStorage.get(key).then((value) => {
                resolve(value);
            });
        })
    }

    set(key: string, value:string){
        return new Promise((resolve, reject) => {
            this.localStorage.set(key, value);
            resolve(true);
        })
    }
}