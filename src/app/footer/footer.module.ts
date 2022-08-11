import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookComponent } from './facebook/facebook.component';
import { ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [FacebookComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductSpecsTabComponent:{
          component: FacebookComponent
        }
      }
    }),
  ],
  exports:[
    FacebookComponent
  ]
})
export class FooterModule { }
