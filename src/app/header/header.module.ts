import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MiniCartComponent } from '@spartacus/storefront';
import { ProductIntroCustomComponent } from './product-intro-custom/product-intro-custom.component';
import { TestModalComponent } from './test-modal/test-modal.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule({
  declarations: [HomeComponent, ContactusComponent,ContactComponent, ProductIntroCustomComponent, TestModalComponent, ContactDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    I18nModule,
    ReactiveFormsModule,
    //Normal Component: Replacing MiniCartComponent(typecode) with ContactusComponent
    ConfigModule.withConfig({
      cmsComponents: {
        MiniCartComponent:{
          component: MiniCartComponent
        }
      }
    }),
     //Flex Component: Replacing AnonymousConsentOpenDialogComponent(flexType) with HomeComponent
    ConfigModule.withConfig({
      cmsComponents:{
        AnonymousConsentOpenDialogComponent:{
          component: HomeComponent
        }
      }
    }),
    //Container component- contains more than one component(container:"true")
    ConfigModule.withConfig({
      cmsComponents:{
        ProductDetailsTabComponent:{
          component: HomeComponent
        }
      }
    }),

    //Container
    ConfigModule.withConfig({
      cmsComponents:{
        ProductIntroComponent:{
          component: ProductIntroCustomComponent
        }
      }
    })
  ],
  exports: [
     HomeComponent,
     ContactusComponent,
     ContactComponent,
     ProductIntroCustomComponent
  ]
})
export class HeaderModule {
  constructor() {
    console.log("Header Module Loaded lazily");
  }
}
