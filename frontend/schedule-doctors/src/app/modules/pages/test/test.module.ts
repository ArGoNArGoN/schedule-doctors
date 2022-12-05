import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestComponent} from "./test.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

const routes: Routes = [
    {path: '', component: TestComponent}
];

@NgModule({
    declarations: [TestComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule
    ],
    exports: [TestComponent]
})
export class TestModule {
}
