import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "decimalPipe",
    pure: false
})

export class decimalPipe implements PipeTransform {

    transform(jackpot: any): any {
        if(jackpot) {
            return jackpot.split(".")[0];
        }
    }
}