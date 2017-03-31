import { ElementRef, EventEmitter } from "@angular/core";
import { NgModel } from "@angular/forms";
import { CtrCompleter } from "./ctr-completer";
export declare class CtrInput {
    private completer;
    private ngModel;
    private el;
    clearSelected: boolean;
    overrideSuggested: boolean;
    fillHighlighted: boolean;
    ngModelChange: EventEmitter<any>;
    private _searchStr;
    private _displayStr;
    constructor(completer: CtrCompleter, ngModel: NgModel, el: ElementRef);
    keyupHandler(event: any): void;
    keydownHandler(event: any): void;
    onBlur(event: any): void;
    searchStr: string;
    private handleSelection();
    private restoreSearchValue();
}
