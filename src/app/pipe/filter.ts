import { Pipe } from "@angular/core";

@Pipe({
    name: "filter",
    pure: false
})

export class FilterPipe {

    credit_filter_day: any;
    transform(items: Array<any>, conditions: { [field:string]: any}): Array<any> {
        if(!items) return [];
        return items.filter(item => {
            for (let field in conditions) {
                if(item[field] !== conditions[field]) {
                    return false;
                }
            }
        })
    }
}