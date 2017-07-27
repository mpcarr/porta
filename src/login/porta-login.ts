import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PortaAPIManager} from "../apiManager/api-manager";

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

    constructor(private navCtrl: NavController, private portaAPIManager: PortaAPIManager) {


        this.portaAPIManager.access.login().subscribe(_=>{
            console.log('RESULT');
        },
        err=>{
           console.error(err);
        });

    }
}