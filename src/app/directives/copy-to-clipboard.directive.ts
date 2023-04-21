import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { Platform } from "@ionic/angular";


declare var ClipboardJS: any;
@Directive({
    selector: "[appCopyToClipboard]",
    exportAs: "CopyToClipboard"
})
export class CopyToClipboardDirective {

    private clipboard;
    private textToCopy: string;
    private componentIsActive = true;

    showtooltip = false;

    @Input() tooltipDelay = 2000;
    @Input()
    set appCopyToClipboard(text: string) {
        if(this.platform.is("cordova")) {
            this.textToCopy = text;
        } else {
            this.elementRef.nativeElement.setAttribute("data-clipboard-text", text);
        }
    }

    @Output() clipboardCopy: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private elementRef: ElementRef,
        private platform: Platform,
        private cordovaClipboard: Clipboard
    ) {}


    @HostListener("click") async onClick() {
        
    }
}