import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    private collapsed = false;

    constructor() { }

    ngOnInit() {
    }


    toggle(val = undefined) {
        if (val !== undefined) {
            this.collapsed = val;
        } else {
            this.collapsed = !this.collapsed;
        }
    }

}
