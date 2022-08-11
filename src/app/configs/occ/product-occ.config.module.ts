import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ConfigModule, OccConfig } from "@spartacus/core";
import { SearchBoxConfig } from "@spartacus/storefront";

export const defaultOccProductConfig: OccConfig = {
    backend: {
      occ: {
        endpoints: {
            productSearch:
            'products/search?fields=DEFAULT',
            //'products/search?fields=hamid', [message: "Incorrect field:'hamid'" type: "ConversionError"]
        }
    }
  }
}

export const DEFAULT_SEARCH_BOX_CONFIG: SearchBoxConfig = {
  minCharactersBeforeRequest: 1,
  displayProducts: false,
  displaySuggestions: true,
  maxProducts: 1,
  maxSuggestions: 1,
  displayProductImages: true,
};

@NgModule({
    imports: [
      CommonModule,
      ConfigModule.withConfig(defaultOccProductConfig),
      ConfigModule.withConfig(DEFAULT_SEARCH_BOX_CONFIG)
    ],
  })

  // Custom Module created manually
  export class ProductOccConfigModule {}