import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-new-install-app-card',
  templateUrl: './new-install-app-card.component.html',
  styleUrls: ['./new-install-app-card.component.scss'],
})
export class NewInstallAppCardComponent implements OnInit {
  // checkPlateform: Boolean;
  constructor( private platform: Platform, private matDialog: MatDialog) {
    // if (this.platform.is("android")) {
    //   this.checkPlateform = true;
    // }
   }

  ngOnInit() {}

  // playTutorial() {
  //   this.matDialog.open( TutorialPopupComponent , {
  //     panelClass: "ongoingWarning-size",
  //     backdropClass: "ongoingWarning-back-drop-color",
  //     data: "data"
  //   });
  // }

}
