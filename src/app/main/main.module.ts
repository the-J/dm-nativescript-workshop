import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import {MainRoutingModule} from "~/app/main/main-routing.module";
import {ListComponent} from "~/app/main/pages/list/list.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MainRoutingModule
    ],
    declarations: [
        ListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MainModule { }
