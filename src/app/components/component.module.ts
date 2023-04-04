import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { MaterialModule } from "../home/material/material.module";
import { HeaderComponent } from "./header/header.component";
import { LoadingPopupComponent } from "./loading-popup/loading-popup.component";
import { LoadingScreenComponent } from "./loading-screen/loading-screen.component";
import { LoadingComponent } from "./loading/loading.component";
import { LoginPage } from "./login/login.page";
// import { LoginPage } from "./login/login.page";
import { SignupPage } from "./signup/signup.page";
import { TopHeaderComponent } from "./top-header/top-header.component";
import { WelcomePage } from "./welcome/welcome.page";
import { CloseAccountComponent } from "./close-account/close-account.component";
import { ChooseCoverImage } from "./choose-cover-image/choose-cover-image.component";


@NgModule({
    declarations: [
        TopHeaderComponent,
        WelcomePage,
        TopHeaderComponent,
        SignupPage,
        LoadingComponent,
        LoadingScreenComponent,
        HeaderComponent,
        LoadingPopupComponent,
        CloseAccountComponent,
        LoginPage,
        ChooseCoverImage
    ],
    exports: [
        TopHeaderComponent,
        SignupPage,
        WelcomePage,
        LoadingComponent,
        LoadingPopupComponent,
        LoadingScreenComponent,
        SignupPage,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        MaterialModule
    ],

})

export class ComponentModule { }