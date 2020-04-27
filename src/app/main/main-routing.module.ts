import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {ListComponent} from "~/app/main/pages/list/list.component";

const routes: Routes = [
    { path: "", redirectTo: "list", pathMatch: "full"},
    { path: "list", component: ListComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MainRoutingModule { }
