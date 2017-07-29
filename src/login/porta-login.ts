import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PortaAPIManager} from "../apiManager/api-manager";
import {SecureStorage, SecureStorageObject} from '@ionic-native/secure-storage';

@Component({
    selector: 'porta-login',
    template: '<ion-header>' +
    '<ion-navbar>' +
    '<ion-title>Porta Login</ion-title>' +
    '</ion-navbar>' +
    '</ion-header>' +
    '<ion-content>' +
        '<button ion-button (click)="createSecureStore()"></button>' +
    '</ion-content>'
})
export class PortaLogin {

    constructor(private navCtrl: NavController, private portaAPIManager: PortaAPIManager, private secureStorage: SecureStorage) {


    }

    createSecureStore(){
        this.secureStorage.create('porta')
            .then((storage: SecureStorageObject) => {
                console.log('secure storage created');
            })
            .catch(err => {
                console.log(err);
            });
    }
}