import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BodyLayoutsComponent } from './layouts/body-lauots/body-layouts.component';



@NgModule({
    declarations: [
        BodyLayoutsComponent
    ],
    exports: [
        BodyLayoutsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule {
}
