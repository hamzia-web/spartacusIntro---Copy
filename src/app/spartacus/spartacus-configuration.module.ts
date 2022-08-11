import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultB2bCheckoutConfig, defaultB2bOccConfig } from "@spartacus/setup";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: environment.baseUrl,
        prefix: '/occ/v2/',
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      currency: [environment.currency],
      language: [environment.language],
      baseSite: [environment.baseSite],
      //urlParameters: ['language','baseSite','currency']
    },
  }), provideConfig(<I18nConfig>{
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '3.4'
    }
  }), provideConfig(defaultB2bOccConfig), provideConfig(defaultB2bCheckoutConfig)]
})
export class SpartacusConfigurationModule {
  constructor() {
    console.log("SpartacusConfigurationModule constructor")
  }
}
