import { Directive, Input } from "@angular/core";


declare var ClipboardJs: any;


@Directive ({
    selector: "[appCopyToClipboard",
    exportAs: "copyToClipboard"
})

export class CopyToClipboardDirective {
    // private textToCopy: string;
    
    // @Input() tooltipDelay = 2000;
    // @Input() 
    // set appCopyToClipboard(text: string) {
    //     if (this.platform.is("cordova")) {
    //         this.textToCopy = text;
    //     } else {
    //         this.elementRef.nativeElement.setAttribute("data-clipboard-text", text);
    //     }
    // }
}