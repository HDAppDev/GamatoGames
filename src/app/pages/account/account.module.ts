import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ComponentModule } from "src/app/components/component.module";
import { MaterialModule } from "src/app/home/material/material.module";
import { LegalComponent } from "./account-options/legal/legal.component";
import { AccountPage } from "./account.page";
import { PreferenceComponent } from "./edit-account/preference/preference.component";
import { ResetPasswordComponent } from "./edit-account/reset-password/reset-password.component";
import { YourDetailsComponent } from "./edit-account/your-details/your-details.component";


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule,
        ComponentModule,
        MaterialModule
    ],
    declarations: [
        AccountPage,
        LegalComponent,
        PreferenceComponent,
        ResetPasswordComponent,
        YourDetailsComponent
    ],

    exports: [ AccountPage, LegalComponent],
    providers: [

    ]
})

export class AccountModule { }