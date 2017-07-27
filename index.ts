import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import {PortaLogin} from "./src/login/porta-login";

@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: [PortaLogin],
    entryComponents: [PortaLogin],
    exports: []
})
export class PortaModule {}