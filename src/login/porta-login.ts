import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'porta-login',
    template: '<ion-header>'+
    '<ion-navbar>'+
    '<ion-title>Porta Login</ion-title>'+
        '</ion-navbar>'+
        '</ion-header>'+
        '<ion-content>'+
        '<mcc-empty-list>'+
        '<ion-icon name="add"></ion-icon>'+
        '<h1>Porta Login</h1>'+
    '<h4>Empty content for Porta Login</h4>'+
'</mcc-empty-list>'+
'</ion-content>'
})
export class PortaLogin {

    constructor(private navCtrl: NavController) {



    }
}