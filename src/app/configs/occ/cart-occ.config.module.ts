import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ConfigModule, OccConfig } from "@spartacus/core";

// variable/constant declaration in typescript. 
export const defaultOccCartConfig: OccConfig = {
    backend:{
        occ:{
            endpoints:{
                carts:
                   'users/${userId}/carts',
                cart: 'users/${userId}/carts/${cartId}?fields=BASIC',
            }
        }
    }

}

@NgModule({
    imports: [
        CommonModule,
        ConfigModule.withConfig(defaultOccCartConfig)
    ],
})

export class CartOccConfigModule{}