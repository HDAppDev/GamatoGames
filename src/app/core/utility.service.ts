import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class UtilityService {

    constructor() {}

    public static autoShowMessage() {
        this.autoShowMessage$.subscribe((data) => {
            
        })
    }
}