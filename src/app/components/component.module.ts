import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { MaterialModule } from "../home/material/material.module";
import { HeaderComponent } from "./header/header.component";
import { LoadingScreenComponent } from "./loading-screen/loading-screen.component";
import { LoadingComponent } from "./loading/loading.component";
// import { LoginPage } from "./login/login.page";
import { SignupPage } from "./signup/signup.page";
import { TopHeaderComponent } from "./top-header/top-header.component";
import { WelcomePage } from "./welcome/welcome.page";


@NgModule({
    declarations: [
        TopHeaderComponent,
        WelcomePage,
        TopHeaderComponent,
        SignupPage,
        LoadingComponent,
        LoadingScreenComponent,
        HeaderComponent
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