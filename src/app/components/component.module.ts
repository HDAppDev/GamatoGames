import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TopHeaderComponent } from "./top-header/top-header.component";
import { WelcomePage } from "./welcome/welcome.page";


@NgModule({
    declarations: [
        TopHeaderComponent,
        WelcomePage,
        TopHeaderComponent
    ],
    exports: [
        TopHeaderComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],

})

export class ComponentModule { }