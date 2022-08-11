import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxConfig } from '@spartacus/storefront';
import { ConfigModule } from '@spartacus/core';

export const DEFAULT_SEARCH_BOX_CONFIG: SearchBoxConfig = {
  minCharactersBeforeRequest: 1,
  displayProducts: false,
  displaySuggestions: true,
  maxProducts: 1,
  maxSuggestions: 1,
  displayProductImages: true,
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig(DEFAULT_SEARCH_BOX_CONFIG)
  ]
})
export class LayoutModule { }
