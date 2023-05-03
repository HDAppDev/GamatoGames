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
            profile_nickname: ["", [Validators.required, this.profanityValidation.bind(this)]],
            name: ["", [Validators.required, Validators.minLength(4), Validators.pattern("^[a-zA-Z]+")]],
            surname: ["", [Validators.required, Validators.minLength(4), Validators.pattern("^[a-zA-Z]+")]],
            address_1: ["", [Validators.required, Validators.minLength(4)]],
            address_2: ["", [Validators.required, Validators.minLength(4)]],
            currentLanguage: [localStorage.getItem("language_code")],
            postal_code: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
            town: ["", [Validators.required]],
            // date_of_birth: ["", Validators.compose([this.dateOfBirthValidation.bind(this)])],
            email: [
                "",
                Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
            ],
            msn: [""],

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

    dateOfBirthValidation(control: UntypedFormControl) {
        if(control.value && control.value != "Invalid date" && control.value != "") {
            let now = new Date();
            let dob = new Date(control.value);
            if(now < dob) {
                return {futureInvalidDate: true};
            }

        }
        else if (control.value == "Invalid date") {
            return {futureInvalidDate: true}
        }
        return null;
    }
}