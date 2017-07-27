import * as _ from 'lodash';
import {Http} from "@angular/http";
import {Injectable, Optional} from "@angular/core";
import {ToastController, LoadingController, Loading} from 'ionic-angular';
import {IPortaAPIManagerConfig} from "./api-interfaces";

@Injectable()
export class PortaAPIManager
{
    private endpoint: string;
    private loading: Loading;

    constructor(@Optional() config: IPortaAPIManagerConfig, private http: Http, public toastCtrl: ToastController, public loadingCtrl: LoadingController){
        if (config) {
            this.endpoint = config.endpoint;
        }else{
            this.endpoint = 'http://localhost:8000/';
        }
        console.log('porta endpoint set to:' + this.endpoint);
    }

    private displayError(message: string){

        if(message == '0 - '){
            //unable to make the request.
            let toast = this.toastCtrl.create({
                message: 'Your internet appears to be offline. Data integrity is not guaranteed.',
                position: 'top',
                showCloseButton: true,
                closeButtonText: 'OK',
                cssClass: 'danger'
            });
            toast.present();
        }
        else{
            let toast = this.toastCtrl.create({
                message: message,
                duration: 3000,
                position: 'top',
                cssClass: 'warning'
            });
            toast.present();
        }
    }

    private showLoading(){
        if(_.isUndefined(this.loading)) {
            this.loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            this.loading.present();
        }
    }

    private dismissLoading(){
        if(!_.isUndefined(this.loading))
        {
            this.loading.dismiss();
            this.loading = undefined;
        }
    }

}
