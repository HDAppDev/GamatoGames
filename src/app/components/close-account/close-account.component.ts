import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { AuthService } from "src/app/core/auth.service";
import { TranslateService } from "@ngx-translate/core"

@Component({
    selector: "app-close-account",
    templateUrl: "./close-account.component.html",
    styleUrls: ["./close-account.component.scss"]
})
export class CloseAccountComponent {
    constructor(private dialog: MatDialogRef<CloseAccountComponent>,
        private authService: AuthService,
        public translate: TranslateService) {
        try {
            this.authService?.selectedlanguages$.subscribe((l) => {
                translate.use(l ? l: "en");
            }, (err => {
                return err;
            }));
        } catch(err) {
            // return err;
        }

    }

    cancel() {
        this.dialog.close(false);
    }

    closeAccount() {
        this.dialog.close(true);
    }
}