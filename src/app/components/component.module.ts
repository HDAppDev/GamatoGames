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
import { PasswordTextPage } from "./password-text/password-text.page";
import { OngoingWarningComponent } from "./ongoing-warning/ongoing-warning.component";
import { NewInstallAppCardComponent } from "./new-install-app-card/new-install-app-card.component";
import { InProgressAnimationComponent } from "./in-progress-animation/in-progress-animation.component";
import { NotificationComponent } from "./notification/notification.component";
import { UserPage } from "./user-profile/user-profile.page";
import { TopNotificationComponent } from "./top-notification/top-notification.component";
import { NotificationPopComponent } from "./notification-pop/notification-pop.component";
import { HoldingScreenComponent } from "./holding-screen/holding-screen.component";


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
        ChooseCoverImage,
        PasswordTextPage,
        OngoingWarningComponent,
        NewInstallAppCardComponent,
        InProgressAnimationComponent,
        NotificationComponent,
        UserPage,
        NotificationComponent,
        TopNotificationComponent,
        NotificationPopComponent,
        HoldingScreenComponent
        
    ],
    exports: [
        TopHeaderComponent,
        SignupPage,
        WelcomePage,
        LoadingComponent,
        LoadingPopupComponent,
        LoadingScreenComponent,
        SignupPage,
        HeaderComponent,
        SignupPage,
        UserPage,
        NotificationComponent,
        InProgressAnimationComponent,

    ],
    imports: [
        CommonModule,
        IonicModule,
        MaterialModule,
    ],

})

export class ComponentModule { }