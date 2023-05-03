import { Component } from "@angular/core";
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { CensorSensor} from "censor-sensor";


@Component({
    selector: "app-your-details",
    templateUrl: "your-details.component.html",
    styleUrls: ["./your-details.component.scss"]
})
export class YourDetailsComponent{

    accountDetails!: UntypedFormGroup;

    constructor(private fb: UntypedFormBuilder) {

    }

    private initializeForm() {
        this.accountDetails = this.fb.group({
            profile_nickname: ["", [Validators.required, this.pro]]
        })
    }

    profanityValidation(control: UntypedFormControl) {
        if(control.value) {
            let censor = new CensorSensor();
            if(censor.isProfane(control.value)) {
                return {isProfanity: true}
            }
        }
        return null
    }
}