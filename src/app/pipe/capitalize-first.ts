import { Pipe, PipeTransform } from "@angular/core";


@Pipe ({
    name: "capitalizeFirst",
})

export class CapitalizeFirstPipe implements PipeTransform {
    transform(value: string, args?: any[]) {
        if (value == null) return "Not Assigned";
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}