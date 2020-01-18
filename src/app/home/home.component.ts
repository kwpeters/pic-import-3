import { Component, OnInit } from '@angular/core';
import {Directory} from "../depot/directory"


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
    public messagePromise: Promise<string>;

    constructor() {

        const tmpDirPath = "/Users/kwpeters/tmp";
        const tmpDir = new Directory(tmpDirPath);

        this.messagePromise = tmpDir.exists()
        .then((tmpDirStats) => {
            return `tmp directory: ${JSON.stringify(tmpDirStats)}`;
        });

    }

    ngOnInit(): void { }

}
