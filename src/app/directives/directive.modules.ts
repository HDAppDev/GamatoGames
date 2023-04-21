import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { UiImageLoaderDirective } from "./img-src.directive";
import { TooltipComponent } from "@angular/material/tooltip";

@NgModule({
    imports:[
        CommonModule,
        IonicModule
    ],
    declarations: [
        UiImageLoaderDirective,
    ]
})

export class DirectiveModule {

}