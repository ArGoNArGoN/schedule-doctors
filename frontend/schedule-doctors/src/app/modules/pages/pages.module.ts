import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WrapperComponent} from "./wrapper/wrapper.component";
import {RouterModule, Routes} from "@angular/router";

/**
 * Это твои руты. loadChildren => путь до модуля страницы.
 * Зачем модули loadChildren?
 * Чтобы при обращении к одной вкладке, код другой страницы не тянулся.
 *
 * '**' - Означает, что любой другой запрос будет захвачем этим рутом (redirectTo перенаправляет на '')
*/

const pageRoutes: Routes = [
    {
        path: 'test',
        loadChildren: () => import('./test/test.module').then(m => m.TestModule)
    },
    {
        path: '**',
        redirectTo: ''
    }
];

const routes: Routes = [
    {
        path: '',
        component: WrapperComponent,
        children: pageRoutes
    }
];

@NgModule({
    declarations: [WrapperComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    providers: [WrapperComponent]
})
export class PagesModule {
}
