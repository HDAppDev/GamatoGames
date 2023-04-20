import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-progress-animation',
  templateUrl: './in-progress-animation.component.html',
  styleUrls: ['./in-progress-animation.component.scss'],
})
export class InProgressAnimationComponent implements OnInit {
  @Input('type') type: string;
  constructor() { }

  ngOnInit() {}

}
