import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { MaterialModule } from "../home/material/material.module";
import { SignupPage } from "./signup/signup.page";
import { TopHeaderComponent } from "./top-header/top-header.component";
import { WelcomePage } from "./welcome/welcome.page";


@NgModule({
    declarations: [
        TopHeaderComponent,
        WelcomePage,
        TopHeaderComponent,
        SignupPage
    ],
    exports: [
        TopHeaderComponent,
        SignupPage,
        MaterialModule
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],

})

export class ComponentModule { }