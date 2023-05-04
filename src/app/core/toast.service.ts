import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
    providedIn: "root"
})
export class ToastService {

    constructor( private toastController: ToastController) {
        this.toastController.create({
            animated: false
        }).then((t) => {
            t.present();
            t.dismiss();
        });
    }

    // async successToast(toastMessage) {
    //     this.toastController.getTop().then((toastElement: HTMLIonToastElement) => {
    //         toastElement ? toastElement.dismiss(): null;
    //     });
    //     const toast = await this.toastController.create({
    //         message: toastMessage,
    //         position: "top",
    //         cssClass: "successToast",
    //         duration: 5000,
    //     });
    //     return await toast.present();
    // }
}
