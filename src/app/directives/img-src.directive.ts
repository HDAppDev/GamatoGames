import { Attribute, Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: "[uiImageLoader]"
})

export class UiImageLoaderDirective {
    ifFirstTime = true;

    constructor(
        @Attribute("onErrorSrc") public onErrorSrc: string,
        private renderer: Renderer2,
        private el: ElementRef
    ) {

    }

    @HostListener("load") onLoad() {
        if(this.ifFirstTime) {
            this.ifFirstTime = false
            this.renderer.setAttribute(this.el.nativeElement, "src", this.getSrc(this.el.nativeElement.src));

        }
    }

    getSrc(src: string) {
        if(src.search("google") !== -1) {
            try {
                if (window.innerWidth < 325) {
                    return src.replace(
                        src
                        .substr(src.length -21)?.split("?")[0]?.split(".")[0],
                        "200x200"
                    );
                } else if (window.innerWidth > 325 && window.innerWidth <1030) {
                    return src.replace(
                        src
                        .substr(src.length-21)?.split("?")[0]?.split(".")[0],
                        "400x400"
                    );
                } else if (window.innerWidth > 1030) {
                    return src.replace(
                        src.substr(src.length - 21)?.split("?")[0]?.split(".")[0],
                        "800x800"
                    );
                }
            } catch {
                return src;
            }
        }
        return src
    }
}