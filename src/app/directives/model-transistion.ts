import { createAnimation } from "@ionic/angular";


export namespace CustomAnimation {
    export function enterFromRight(): any {
        const backDropAnimation = createAnimation();
        // backDropAnimation.addElement(document.querySelector('ion-backdrop'));
    }
}