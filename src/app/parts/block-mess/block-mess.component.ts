import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlockMessService } from './block-mess.service';

@Component({
    selector: 'app-block-mess',
    templateUrl: './block-mess.component.html',
    styleUrls: ['./block-mess.component.css']
})
export class BlockMessComponent implements OnInit, OnDestroy {

    private mess: {
        id: number;
        type: string;
        text: string;
    }[] = [];

    private bSub;

    constructor(private blockMessServ: BlockMessService) {
    }

    ngOnInit() {
        this.bSub = BlockMessService.subject$.subscribe(
            data => {
                this.add(data.text, data.type);
            }
        );
    }

    ngOnDestroy() {
        if (this.bSub) {
            this.bSub.unsubscribe();
        }
    }

    private add(txt, type = '', timeout = 3500) {
        if (type === 'clear') {
            this.mess = [];
            return;
        }

        if (!txt || typeof txt !== 'string') {
            return false;
        }

        let message_block = {
            id: Date.now(),
            type: type,
            text: txt
        };

        this.mess.push(message_block);

        if (typeof timeout === 'number' && timeout > 0) {
            setTimeout(() => {
                this.close(message_block);
            }, timeout);
        }
    }

    private close(obj) {
        this.mess.forEach(v => {
            if (v.id === obj.id) {
                obj.type += ' -out';
            }
        });
        setTimeout(() => {
            this.mess = this.mess.filter(v => v.id !== obj.id);
        }, 350);
    }
}
