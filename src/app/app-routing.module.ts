import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsPageGuard } from '@spartacus/storefront';
import { ContactComponent } from './header/contact/contact.component';
import {ContactusComponent} from './header/contactus/contactus.component';
import {AboutComponent} from './header/about/about.component';
import {ContactDetailComponent} from './header/contact-detail/contact-detail.component';

const routes: Routes = [
  {
    path: "products",
    component: AboutComponent,
    data: {pageLabel: '/homepage'},
    canActivate: [CmsPageGuard]
  },
  {
    path: "services",
    component: ContactusComponent,
    data: {pageLabel: '/homepage'},
    canActivate: [CmsPageGuard]
  },
  {
    path: "subscribe",
    component: ContactComponent,
    data: {pageLabel: '/homepage'},
    canActivate: [CmsPageGuard]
  },
  {
    path: "subscribe/:id",
    component: ContactDetailComponent,
    data: {pageLabel: '/homepage'},
    canActivate: [CmsPageGuard]
  },
  {
    path: 'subscribe',
    loadChildren: () => import('./header/header.module').then(m => m.HeaderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'corrected',
    initialNavigation: 'enabled',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
  }
}
