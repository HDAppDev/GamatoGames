import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { UiImageLoaderDirective } from "./img-src.directive";
@NgModule({
    imports:[
        CommonModule,
        IonicModule
    ],
    declarations: [
        UiImageLoaderDirective,
    ],
    exports: [
        UiImageLoaderDirective,

    ],
    providers: [Clipboard]
})

export class DirectiveModule {

}