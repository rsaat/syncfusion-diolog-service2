import { Component, EventEmitter, ViewChild } from '@angular/core';

@Component({
  templateUrl: "./dialog.component.html",
  styleUrls: ['./dialog.component.css']
})
export class MyDialogComponent {
  public isFullScreen: Boolean;
  public dialogOldPositions: any;
  public header: any = 'Header';

  @ViewChild("dialogObj", { static: false }) dialogObj;
}