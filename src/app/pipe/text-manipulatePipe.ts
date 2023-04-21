import { Pipe } from "@angular/core";

@Pipe({
    name: "toLower",
})
export class TextManipulatePipe {
    // transform(value) {
    //     return value?.toLowerCase();
    // }
}