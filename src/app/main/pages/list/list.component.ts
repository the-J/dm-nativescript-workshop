import { Component, OnInit } from "@angular/core";

@Component({
    selector: "List",
    templateUrl: "./list.component.html"
})
export class ListComponent implements OnInit {
    public title: string = 'COVID-19';

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
