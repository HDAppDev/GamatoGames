import { Directive, Input } from "@angular/core";


declare var ClipboardJs: any;


@Directive ({
    selector: "[appCopyToClipboard",
    exportAs: "copyToClipboard"
})

export class CopyToClipboardDirective {}