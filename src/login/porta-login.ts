import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PortaAPIManager} from "../apiManager/api-manager";
import {SecureStorage, SecureStorageObject} from '@ionic-native/secure-storage';

import * as cryptico from 'cryptico';

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

        // The passphrase used to repeatably generate this RSA key.
        var PassPhrase = "The Moon is a Harsh Mistress.";

        // The length of the RSA key, in bits.
        var Bits = 1024;

        //var MattsRSAkey = cryptico.cryptico.generateRSAKey(PassPhrase, Bits);

        this.secureStorage.create('porta')
            .then((storage: SecureStorageObject) => {
                console.log('secure storage created');
            })
            .catch(err => {
                console.log(err);
            });
    }
}