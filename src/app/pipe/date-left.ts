import { Injectable, Pipe } from "@angular/core";


@Pipe ({
    name: "dateLeft",
})

@Injectable()
export class DateLeftPipe {

    // transform( value, args, arg2) {
    //     var result: string = "";
    //     let now = new Date().getTime();
    //     if(!value) {
    //         return result;
    //     }
    //     if (typeof value === "string") {
    //         let delta = Math.floor((now-value.getTime()) /1000);
    //     }
    // }
}