import * as _ from 'lodash';
import {Http} from "@angular/http";
import {Injectable, Optional} from "@angular/core";
import {ToastController, LoadingController, Loading} from 'ionic-angular';
import {PortaAPIRouteAccess} from "./routes/access";
import {PortaAPIManagerConfig} from "./api-manager-config";

@Injectable()
export class PortaAPIManager
{

    access: PortaAPIRouteAccess;
    private endpoint: string;
    private loading: Loading;

    constructor(private http: Http, public toastCtrl: ToastController, public loadingCtrl: LoadingController, private config: PortaAPIManagerConfig){
        //if (config) {
        //    this.endpoint = config.endpoint;
        //}else{
            this.endpoint = 'http://localhost:8000/';
        //}
        console.log('porta endpoint set to:' + this.endpoint);


        this.access = new PortaAPIRouteAccess(http, this.endpoint);
        this.access.errorItem$.subscribe(err => {
            if(!err.options || (err.options && (_.isUndefined(err.options.toast) || err.options.toast)))
            {
                this.displayError(err.message);
            }
        });
        this.access.loading$.subscribe(loading => {
            if(loading.dismiss){
                this.dismissLoading();
            } else if(!loading.options || (loading.options && (_.isUndefined(loading.options.loading) || loading.options.loading)))
            {
                this.showLoading();
            }
        });
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
