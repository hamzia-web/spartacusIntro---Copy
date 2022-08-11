import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { SpartacusModule } from './spartacus/spartacus.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductOccConfigModule } from "./configs/occ/product-occ.config.module";
import { CartOccConfigModule } from "./configs/occ/cart-occ.config.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SubscribeService } from "src/services/subscribe.service";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { Routes } from "@angular/router";
import { ContactComponent } from "./header/contact/contact.component";
import { CustomHttpInterceptorInterceptor } from "./custom-http-interceptor.interceptor";
import { CustomPlpModule } from "./custom-plp/custom-plp.module";
import { LayoutModule } from "./configs/occ/layout/layout.module";
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    NgbModule,
    ProductOccConfigModule,
    CartOccConfigModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    CustomPlpModule,
    LayoutModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptorInterceptor,
      multi: true
    },
    // Implementation of PathLocationStrategy(Default Strategy): Angular will start loading urls using /
    // {
    //   provide: LocationStrategy,
    //   useClass: PathLocationStrategy
    // },
    // // Implementation of HashLocationStrategy: Angular will start loading urls using #
    // To enable HashLocationStrategy in an Angular application we pass {useHash: true}.The # part of the URL is called the hash fragment.
    // {
    //   provide: LocationStrategy,
    //   useClass: HashLocationStrategy
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){}

}

