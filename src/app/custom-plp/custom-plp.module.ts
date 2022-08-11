import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CmsModule, ConfigModule, FeaturesConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import {
    AddToCartModule,
    IconModule,
    ItemCounterModule,
    ListNavigationModule,
    MediaModule,
    NavigationModule,
    OutletModule,
    PaginationModule,
    ProductGridItemComponent,
    ProductListComponent,
    ProductListItemComponent,
    ProductListModule,
    ProductScrollComponent,
    ProductViewComponent,
    SpinnerModule,
    StarRatingModule
} from '@spartacus/storefront';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [ListComponent],
    imports: [
        CommonModule,
        I18nModule,
        ProductListModule,
        ConfigModule.withConfig({
            cmsComponents: {
                CMSProductListComponent: {
                    component: ListComponent,
                },
                ProductGridComponent: {
                    component: ListComponent,
                },
                SearchResultsListComponent: {
                    component: ListComponent,
                },
            },
        }),
        PaginationModule
    ],
  // exports: [
  //   ProductListComponent,
  //   ProductListItemComponent,
  //   ProductGridItemComponent,
  //   ProductViewComponent,
  //   ProductScrollComponent,
  // ],
  exports: [ListComponent]
})
export class CustomPlpModule { }
