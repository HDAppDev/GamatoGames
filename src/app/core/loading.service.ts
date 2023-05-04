import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Injectable({
    providedIn: "root"
})

export class LoadingService {

    isLoading = false;

    constructor(public loadingController: LoadingController) {}

    async present(time?:number) {
        if(this.isLoading) return;
        return await this.loadingController.create({
            message: "",
            mode: "ios",
            spinner: null,
            duration: time ? time : 20000,
            cssClass: "custom-loading",
        }).then((a) => {
            a.present().then(() => {
                a.dismiss().then(() => { let spinner = "about presenting" });
            })
        })
    }

    async dismiss() {
        if(this.isLoading) {
            this.isLoading = false;
            return await this.loadingController.dismiss().then(
                () => { },
                (onReject) => { }
            );
        }
    }
}