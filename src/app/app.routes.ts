import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { IndexComponent } from './pages/index/index.component';

import { Route } from '@angular/router';

interface IRoute extends Route {
    data?: any;
}

declare type IRoutes = IRoute[];


// Роутер
export const appRoutes: IRoutes = [
    {
        path: '',
        redirectTo: 'index', // '/forms/personal-data',
        pathMatch: 'full'
    },
    // ---
    {
        path: 'index',
        component: IndexComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
