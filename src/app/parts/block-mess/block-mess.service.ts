import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BlockMessService {

    static subject$: Subject<any>;

    constructor() {
        BlockMessService.subject$ = new Subject();
    }

    info(txt) {
        BlockMessService.subject$.next({
            text: txt,
            type: 'info'
        });
    }

    error(txt) {
        BlockMessService.subject$.next({
            text: txt,
            type: 'error'
        });
    }

    success(txt) {
        BlockMessService.subject$.next({
            text: txt,
            type: 'success'
        });
    }

    clear(){
        BlockMessService.subject$.next({
            text: '',
            type: 'clear'
        });
    }

}
