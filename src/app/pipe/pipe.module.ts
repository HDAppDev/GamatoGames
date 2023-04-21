import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { FilterPipe } from "./filter";
import { DayPipe } from "./day";
import { DateLeftPipe } from "./date-left";
import { CustomDatePipe } from "./custom.datepipe";
import { CapitalizeFirstPipe } from "./capitalize-first";
import { decimalPipe } from "./decimalPipe";
import { SafeHtmlPipe } from "./safehtmlpipe";
import { TextManipulatePipe } from "./text-manipulatePipe";

@NgModule({
    imports: [IonicModule],
    declarations: [
        FilterPipe,
        DayPipe,
        DateLeftPipe,
        CustomDatePipe,
        CapitalizeFirstPipe,
        decimalPipe,
        SafeHtmlPipe,
        TextManipulatePipe,
    ],
    exports: [
        FilterPipe,
        DayPipe,
        DateLeftPipe,
        CustomDatePipe,
        CapitalizeFirstPipe,
        decimalPipe,
        SafeHtmlPipe,
        TextManipulatePipe
    ],

})

export class PipeModule {

}