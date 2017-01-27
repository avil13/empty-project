import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Роутер
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { ApiService } from './services/api.service';
import { BlockMessService , BlockMessComponent } from './parts/block-mess';

import { A2MaskDirective } from './directives/a2-mask/a2-mask.directive';

// Storage
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; // DEV
import { StoreModule } from '@ngrx/store';
import { storeReducer } from './store/reducers';
import { INITIAL_STATE } from './store/application-state';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { IndexComponent } from './pages/index/index.component';
import { NavComponent } from './parts/nav/nav.component';

@NgModule({
    declarations: [
        AppComponent,
        BlockMessComponent,
        A2MaskDirective,
        PageNotFoundComponent,
        IndexComponent,
        NavComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        ApiService,
        BlockMessService,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
