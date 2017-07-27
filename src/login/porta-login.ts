import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'porta-login',
    template: '<ion-header>'+
        '<ion-navbar>'+
            '<ion-title>Porta Login</ion-title>'+
        '</ion-navbar>' +
    '</ion-header>'+
    '<ion-content></ion-content>'
})
export class PortaLogin {

    constructor(private navCtrl: NavController) {



    }
}