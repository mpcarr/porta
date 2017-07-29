import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import {PortaLogin} from "./src/login/porta-login";
import {PortaAPIManager} from "./src/apiManager/api-manager";
import {IPortaAPIManagerConfig} from "./src/apiManager/api-interfaces";
import {PortaAPIManagerConfig} from "./src/apiManager/api-manager-config";
import {SecureStorage} from "@ionic-native/secure-storage";
import {PortaProviders} from "./src/config/porta.providers";

export {PortaLogin} from './src/login/porta-login';

@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: [PortaLogin],
    entryComponents: [PortaLogin],
    exports: []
})
export class PortaModule {
    static forRoot(config: PortaAPIManagerConfig): ModuleWithProviders {
        return {
            ngModule: PortaModule,
            providers: PortaProviders.getProviders(config)
        }
    }
}