import { ElementRef, OnDestroy, OnInit } from "@angular/core";
import { CompleterItem } from "../components/completer-item";
import { CtrCompleter, CompleterDropdown } from "./ctr-completer";
export interface CtrRowElement {
    setHighlited(selected: boolean): void;
    getNativeElement(): any;
    getDataItem(): CompleterItem;
}
export declare class CtrRowItem {
    row: CtrRowElement;
    index: number;
    constructor(row: CtrRowElement, index: number);
}
export declare class CtrDropdown implements CompleterDropdown, OnDestroy, OnInit {
    private completer;
    private el;
    private rows;
    private currHighlited;
    private isScrollOn;
    constructor(completer: CtrCompleter, el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onMouseDown(event: any): void;
    registerRow(row: CtrRowItem): void;
    highlightRow(index: number): void;
    clear(): void;
    onSelected(item: CompleterItem): void;
    selectCurrent(): void;
    nextRow(): void;
    prevRow(): void;
    private dropdownScrollTopTo(offset);
    private dropdownRowTop();
    private dropdownHeight();
    private dropdownRowOffsetHeight(row);
}
