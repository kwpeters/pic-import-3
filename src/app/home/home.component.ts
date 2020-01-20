import { Component, OnInit } from '@angular/core';
import {Directory} from "../depot/directory"
import {ipcRenderer} from "electron";

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


    ngOnInit(): void {
    }


    public onChooseDirectoryA(): void
    {
        console.log("Got the click event!!!");

        // ipcRenderer.send("openFolder", () => {
        //     console.log("openFolder event sent.");
        // });
        //
        // ipcRenderer.once("folderData", (event, data) => {
        //     console.log("data:", data);
        // });

        ipcRenderer.invoke("openFolder", "foo")
        .then((filePaths) => {
            console.log("filePaths:", filePaths);
        });
    }


}
