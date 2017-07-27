import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import {PortaLogin} from "./src/login/porta-login";
import {PortaAPIManager} from "./src/apiManager/api-manager";
import {IPortaAPIManagerConfig} from "./src/apiManager/api-interfaces";
import {PortaAPIManagerConfig} from "./src/apiManager/api-manager-config";

export {PortaLogin} from './src/login/porta-login';

@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: [PortaLogin],
    entryComponents: [PortaLogin],
    exports: []
})
export class PortaModule {
    static forRoot(config: IPortaAPIManagerConfig): ModuleWithProviders {

        let apiconfig = new PortaAPIManagerConfig();
        apiconfig.endpoint = config.endpoint;

        return {
            ngModule: PortaModule,
            providers: [
                {provide: PortaAPIManagerConfig, useValue: apiconfig},
                PortaAPIManager
            ]
        }
    }
}