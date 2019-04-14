import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { reducers, effects } from '../store';

// http拦截器,捕获异常，加Token
import { HttpConfigInterceptor} from '../interceptor/httpconfig.interceptor';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ControllerComponent } from './controller/controller.component';
import { PortalComponent } from './portal/portal.component';
import { BannerComponent } from './portal/banner/banner.component';
import { HeadlineComponent } from './common/headline/headline.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { SearchInputComponent } from './search/search-input/search-input.component';
import { HotSearchComponent } from './search/hot-search/hot-search.component';
import { SearchListComponent } from './search/search-list/search-list.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ControllerComponent,
    PortalComponent,
    BannerComponent,
    HeadlineComponent,
    SearchComponent,
    ProfileComponent,
    ListComponent,
    SearchInputComponent,
    HotSearchComponent,
    SearchListComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
